import React, { useEffect, useState } from 'react';
import DataMap from './DataMap';
import DataTable from './DataTable';

const fetchData = async () => {
    try {
        const response = await fetch(
            'https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13'
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const DataFetching = () => {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            const data = await fetchData();
            setCompanies(data);
            setIsLoading(false);
        };

        fetchDataAndSetState();
    }, []);

    if (isLoading) {
        return <div>Loading data...</div>;
    }

    return (
        <>
            <DataMap companies={companies} />
            <DataTable companies={companies} />
        </>
    );
};

export default DataFetching;