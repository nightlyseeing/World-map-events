import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("./components/MapClient"), { ssr: false });

export default function Page() {
  return (
    <div className="page">
      <div style={{ padding: 12, borderBottom: "1px solid #eee" }}>
        <h1 style={{ margin: 0, fontSize: 16 }}>World events map</h1>
      </div>
      <div className="mapWrap">
        <MapClient />
      </div>
    </div>
  );
}