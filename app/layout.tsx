import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Koroz Food — Ноокат',
  description: 'Бургеры, шаурма, пицца, роллы и фритюр в Ноокате, Ош, Кыргызстан',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${oswald.variable} font-oswald bg-[#0a0a0a] text-white`}>{children}</body>
    </html>
  );
}
