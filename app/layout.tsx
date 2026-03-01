import "./globals.css";

export const metadata = {
  title: "World Map Events",
  description: "World events on a map (USGS + NASA EONET)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}