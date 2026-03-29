import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wellness Physiocare | Dr. Priya Chudasama (PT)",
  description:
    "Physiotherapy care by Dr. Priya Chudasama (PT), M.I.A.P for pain relief, sports injury rehab, neuro care, and post-operative recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
