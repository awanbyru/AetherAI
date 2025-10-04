
import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Aether - Your Next Generation Solution',
  description: 'A beautifully designed, modern, and responsive landing page built with Next.js, React, TypeScript, and Tailwind CSS to showcase a fictional SaaS product.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-content antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
