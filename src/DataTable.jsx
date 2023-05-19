import React, { useEffect, useState } from 'react';

function DataTable() {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [sectorFilter, setSectorFilter] = useState('');
    const [feeFilterMin, setFeeFilterMin] = useState('');
    const [feeFilterMax, setFeeFilterMax] = useState('');
    const [showSectorFilter, setShowSectorFilter] = useState(false);
    const [showFeeFilter, setShowFeeFilter] = useState(false);

    const url = 'https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error fetching data: ' + response.status);
                }
                const jsonData = await response.json();
                // console.log('jsonData:', jsonData);
                setData(jsonData);
                setFilteredData(jsonData); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        applyFilters(sectorFilter, feeFilterMin, feeFilterMax);
    }, [sectorFilter, feeFilterMin, feeFilterMax]);

    const handleSectorFilterChange = (event) => {
        const { value } = event.target;
        setSectorFilter(value);
    };

    const handleFeeFilterMinChange = (event) => {
        const { value } = event.target;
        setFeeFilterMin(value);
    };

    const handleFeeFilterMaxChange = (event) => {
        const { value } = event.target;
        setFeeFilterMax(value);
    };

    const applyFilters = (sector, feeMin, feeMax) => {
        // console.log('sector:', sector);
        // console.log('feeMin:', feeMin);
        // console.log('feeMax:', feeMax);
        if (data) {
            const filtered = data.filter(
                (item) =>
                    item.sector.toLowerCase().includes(sector.toLowerCase()) &&
                    (feeMin === '' || parseFloat(item.fees.amount) >= parseFloat(feeMin)) &&
                    (feeMax === '' || parseFloat(item.fees.amount) <= parseFloat(feeMax))
            );
            // console.log('filteredData:', filtered);
            setFilteredData(filtered);
        }
    };


    const toggleSectorFilter = () => {
        setShowSectorFilter(!showSectorFilter);
    };

    const toggleFeeFilter = () => {
        setShowFeeFilter(!showFeeFilter);
    };

    return (
        <div>
            {data ? (
                <div>
                    <table role="table" aria-label="Data Table">
                        <thead>
                            <tr>
                                <th role="columnheader" aria-label="ID">ID</th>
                                <th role="columnheader" aria-label="Company">Company</th>
                                <th role="columnheader" aria-label="Sector:">
                                    Sector:
                                    <span className="filter-icon" onClick={toggleSectorFilter}>
                                        &#x1F50D;
                                    </span>
                                    {showSectorFilter && (
                                        <input
                                            type="text"
                                            placeholder="Sector"
                                            value={sectorFilter}
                                            onChange={handleSectorFilterChange}
                                        />
                                    )}
                                </th>
                                <th role="columnheader" aria-label="Stock Symbol">Stock Symbol</th>
                                <th role="columnheader" aria-label="Address">Address</th>
                                <th role="columnheader" aria-label="Latitude">Latitude</th>
                                <th role="columnheader" aria-label="Longitude">Longitude</th>
                                <th role="columnheader" aria-label="Fees Amount (range):">
                                    Fees Amount (range):
                                    <span className="filter-icon" onClick={toggleFeeFilter}>
                                        &#x1F50D;
                                    </span>
                                    {showFeeFilter && (
                                        <div>
                                            <input
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                placeholder="Min"
                                                value={feeFilterMin}
                                                onChange={handleFeeFilterMinChange}
                                                data-testid="min-fee-input"
                                            />
                                            <input
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                placeholder="Max"
                                                value={feeFilterMax}
                                                onChange={handleFeeFilterMaxChange}
                                                data-testid="max-fee-input"
                                            />
                                        </div>
                                    )}
                                </th>
                                <th role="columnheader" aria-label="Fees Currency">Fees Currency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData &&
                                filteredData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.company}</td>
                                        <td>{item.sector}</td>
                                        <td>{item.stockSymbol}</td>
                                        <td>{item.address}</td>
                                        <td>{item.location.latitude}</td>
                                        <td>{item.location.longitude}</td>
                                        <td>{item.fees.amount}</td>
                                        <td>{item.fees.currency}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default DataTable;
