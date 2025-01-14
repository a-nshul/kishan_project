import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Okas Aerospace",
  description: "Revolutionizing Aerial Operations in the realm of modern aerospace technology, OJAS Aerospace stands as a pioneering force, pushing the boundaries of innovation with its remarkable fleet of High-Altitude Unmanned Aerial Vehicles (UAVs). These cutting-edge creations are poised to redefine the landscape of surveillance, reconnaissance, and logistics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
