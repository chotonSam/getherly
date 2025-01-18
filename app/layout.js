import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Eventry - Home",
  description:
    "A single entry to connected to all the online events from the globe.",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />

          <main className="pb-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
