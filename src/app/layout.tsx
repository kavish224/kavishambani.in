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
  metadataBase: new URL('https://kavishambani.in'),
  title: 'Kavish Ambani - Personal Website',
  description: 'Official website of Kavish Ambani.',
  openGraph: {
    type: 'website',
    url: 'https://kavishambani.in',
    title: 'Kavish Ambani - Personal Website',
    description: 'Welcome to the official website of Kavish Ambani.',
    images: [
      {
        url: '/public/globe.svg', // Replace with your actual image URL
        alt: 'Kavish Ambani',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
