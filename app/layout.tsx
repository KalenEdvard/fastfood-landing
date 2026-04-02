import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Koroz Food — Бургеры, Шаурма, Пицца в Ноокате',
  description: 'Koroz Food — фастфуд в Ноокате, Ош, Кыргызстан. Бургеры, шаурма, пицца, роллы, фритюр. Заказ через WhatsApp +996779044425. Доставка и самовывоз.',
  keywords: [
    'Koroz Food',
    'фастфуд Ноокат',
    'бургеры Ноокат',
    'шаурма Ноокат',
    'пицца Ноокат',
    'роллы Ноокат',
    'фастфуд Ош',
    'бургеры Ош',
    'шаурма Ош',
    'пицца Ош',
    'еда Ноокат',
    'доставка еды Ноокат',
    'фастфуд Кыргызстан',
    'Короз Фуд',
    'заказать еду Ноокат',
    'бургер Кыргызстан',
  ],
  openGraph: {
    title: 'Koroz Food — Бургеры, Шаурма, Пицца в Ноокате',
    description: 'Фастфуд в Ноокате, Ош. Бургеры, шаурма, пицца, роллы. Заказ через WhatsApp.',
    locale: 'ru_KG',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${oswald.variable} font-oswald bg-[#0a0a0a] text-white`}>{children}</body>
    </html>
  );
}
