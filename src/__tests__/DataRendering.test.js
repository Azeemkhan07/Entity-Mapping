import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "../components/DataTable";

describe("DataTable- Data Fetching & render", () => {
    it("renders data correctly", async () => {
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

        render(<DataTable companies={mockData} />);

        await screen.findByText("1");

        expect(screen.getByText("Photobug")).toBeInTheDocument();
        expect(screen.getAllByText("Consumer Services")[0]).toBeInTheDocument();
        expect(screen.getByText("SIRI")).toBeInTheDocument();
        expect(screen.getByText("288 Stuart Hill")).toBeInTheDocument();
    });
});
