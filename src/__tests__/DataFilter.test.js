import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import DataTable from "../components/DataTable";

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
        render(<DataTable companies={mockData} />);

        await screen.findByText("3");

        const sectorTh = screen.getByText("Sector:").closest("th");

        const filterIcon = within(sectorTh).getByText("🔍");

        fireEvent.click(filterIcon);

        const filterInput = await screen.findByPlaceholderText("Sector");

        fireEvent.input(filterInput, {
            target: { value: "Consumer Durables" },
        });

        expect(screen.getByText("Kayveo")).toBeInTheDocument();
        expect(screen.getByText("Consumer Durables")).toBeInTheDocument();
        expect(screen.getByText("RUSHB")).toBeInTheDocument();
        expect(screen.getByText("37540 Armistice Court")).toBeInTheDocument();
    });

    it("displays filtered data when filtering by fees amount", async () => {
        render(<DataTable companies={mockData} />);

        await screen.findByText("3");

        const feesTh = screen.getByText("Fees Amount (range):").closest("th");

        const filterIcon = within(feesTh).getByText("🔍");

        fireEvent.click(filterIcon);

        const minFeeInput = await screen.findByTestId("min-fee-input");
        const maxFeeInput = await screen.findByTestId("max-fee-input");

        fireEvent.input(minFeeInput, { target: { value: "20000" } });
        fireEvent.input(maxFeeInput, { target: { value: "30000" } });

        expect(screen.getByText("Photobug")).toBeInTheDocument();
        expect(screen.getAllByText("Consumer Services")[0]).toBeInTheDocument();
        expect(screen.getByText("SIRI")).toBeInTheDocument();
        expect(screen.getByText("288 Stuart Hill")).toBeInTheDocument();

    });
});