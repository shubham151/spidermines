// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "Converted from React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
