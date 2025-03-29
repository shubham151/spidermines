// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Shubham Mishra",
  description: "Portfolio of Shubham Mishra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
