import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const markerIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
});

const DataMap = ({ companies }) => {
    return (
        <div data-testid="map-container" className="map-container">
            <MapContainer
                className="map"
                center={[38.2956138, 140.9969841]}
                zoom={5}
                whenCreated={(map) => {
                    map.setLocale('en');
                }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png" />

                {companies.map((company) => (
                    <Marker
                        key={company.id}
                        position={[company.location.latitude, company.location.longitude]}
                        icon={markerIcon}
                        data-testid={`marker-${company.id}`}
                        role="marker"
                    >
                        <Popup>
                            <h3>{company.company}</h3>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>Sector:</span>{' '}
                                {company.sector}
                            </p>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>Stock Symbol:</span>{' '}
                                {company.stockSymbol}
                            </p>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>Address:</span>{' '}
                                {company.address}
                            </p>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>Location:</span>{' '}
                                {company.location.latitude}, {company.location.longitude}
                            </p>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>Fee:</span>{' '}
                                {company.fees.amount} {company.fees.currency}
                            </p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default DataMap;
