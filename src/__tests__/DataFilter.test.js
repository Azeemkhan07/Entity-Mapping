import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import DataTable from "../DataTable";

describe("DataTable - Filters", () => {
    const mockData = [
        {
            id: 1,
            company: "Photobug",
            sector: "Consumer Services",
            stockSymbol: "SIRI",
            address: "288 Stuart Hill",
            location: { latitude: 38.2956138, longitude: 140.9969841 },
            fees: { amount: "28127.70", currency: "GBP" },
        },
        {
            id: 2,
            company: "Quaxo",
            sector: "Consumer Services",
            stockSymbol: "VLGEA",
            address: "3 Kenwood Place",
            location: { latitude: 31.76, longitude: -106.49 },
            fees: { amount: "20007.09", currency: "GBP" },
        },
        {
            id: 3,
            company: "Kayveo",
            sector: "Consumer Durables",
            stockSymbol: "RUSHB",
            address: "37540 Armistice Court",
            location: { latitude: 2.9374756, longitude: 101.7048008 },
            fees: { amount: "15836.64", currency: "GBP" },
        },
    ];

    beforeEach(() => {
        jest.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockData),
        });
    });

    afterEach(() => {
        global.fetch.mockRestore();
    });

    it("displays filtered data when filtering by sector", async () => {
        render(<DataTable />);

        // Wait for the data to be fetched and rendered
        await screen.findByText("3");

        // Get the th element that contains the Sector label
        const sectorTh = screen.getByText("Sector:").closest("th");

        // Use the within function to scope the query to only search within the sectorTh element
        const filterIcon = within(sectorTh).getByText("🔍");

        // Simulate clicking on the filter icon
        fireEvent.click(filterIcon);

        // Wait for the Sector text input to be rendered
        const filterInput = await screen.findByPlaceholderText("Sector");

        // Simulate entering text into the Sector text input
        fireEvent.input(filterInput, { target: { value: "Consumer Durables" } });

        // Verify that the filtered data is displayed correctly
        expect(screen.getByText("Kayveo")).toBeInTheDocument();
        expect(screen.getByText("Consumer Durables")).toBeInTheDocument();
        expect(screen.getByText("RUSHB")).toBeInTheDocument();
        expect(screen.getByText("37540 Armistice Court")).toBeInTheDocument();
    });

    it("displays filtered data when filtering by fees amount", async () => {
        render(<DataTable />);

        // Wait for the data to be fetched and rendered
        await screen.findByText("3");

        // Get the th element that contains the Fees Amount (range): label
        const feesTh = screen.getByText("Fees Amount (range):").closest("th");

        // Use the within function to scope the query to only search within the feesTh element
        const filterIcon = within(feesTh).getByText("🔍");

        // Simulate clicking on the filter icon
        fireEvent.click(filterIcon);

        // Wait for the Min and Max fee inputs to be rendered
        const minFeeInput = await screen.findByTestId("min-fee-input");
        const maxFeeInput = await screen.findByTestId("max-fee-input");

        // Simulate entering text into the Min and Max fee inputs
        fireEvent.input(minFeeInput, { target: { value: "20000" } });
        fireEvent.input(maxFeeInput, { target: { value: "30000" } });

        // Verify that the filtered data is displayed correctly
        expect(screen.getByText("Photobug")).toBeInTheDocument();
        expect(screen.getAllByText("Consumer Services")[0]).toBeInTheDocument();
        expect(screen.getByText("SIRI")).toBeInTheDocument();
        expect(screen.getByText("288 Stuart Hill")).toBeInTheDocument();
    });
});
