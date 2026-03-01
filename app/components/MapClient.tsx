"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapClient() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setItems(data.items || []));
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((ev) => (
        <Marker key={ev.id} position={[ev.location.lat, ev.location.lon]}>
          <Popup>
            <strong>{ev.title}</strong><br/>
            {new Date(ev.time).toLocaleString()}<br/>
            {ev.source}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}