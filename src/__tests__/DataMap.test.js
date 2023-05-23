import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import DataMap from '../components/DataMap';

describe('DataMap', () => {
    it('renders the map container, markers and also check if the popup appears', async () => {
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

        render(<DataMap companies={mockData} />);

        const mapContainer = screen.getByTestId('map-container');

        expect(mapContainer).toBeInTheDocument();

        await waitFor(() => {
            setTimeout(() => {
                mockData.forEach((company) => {
                    const markerTestId = `marker-${company.id}`;
                    const marker = screen.getByTestId(markerTestId);
                    expect(marker).toBeInTheDocument();
                    fireEvent.click(marker);

                    const popup = screen.getByRole('tooltip');
                    expect(popup).toBeInTheDocument();

                    const companyDetails = screen.getByText(company.company);
                    expect(companyDetails).toBeInTheDocument();
                });
            }, 1000);
        });
    });
});
