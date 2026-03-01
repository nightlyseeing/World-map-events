import { NextResponse } from "next/server";

export async function GET() {
  const usgs = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
  ).then(r => r.json());

  const items = (usgs.features || []).map((f: any) => ({
    id: "usgs-" + f.id,
    title: f.properties.title,
    time: new Date(f.properties.time).toISOString(),
    source: "USGS",
    location: {
      lat: f.geometry.coordinates[1],
      lon: f.geometry.coordinates[0]
    }
  }));

  return NextResponse.json({ items });
}