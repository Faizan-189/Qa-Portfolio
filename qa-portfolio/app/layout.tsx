import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QA Engineer Portfolio | Alex Morgan',
  description: 'Software Quality Assurance Engineer with 5+ years of experience in manual and automated testing across web, mobile, and API platforms.',
  keywords: 'QA Engineer, Software Testing, Test Automation, Selenium, Playwright, Cypress',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
