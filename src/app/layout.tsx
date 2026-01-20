import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Opsional: pilih weight yang kamu butuh
});
export const metadata: Metadata = {
  title: 'Portfolio Rizky Rahmat Hakiki',
  description: 'All Rizky Rahmat Hakiki works in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
