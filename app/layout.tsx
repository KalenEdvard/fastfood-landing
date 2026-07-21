import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Koroz Food — Бургеры, Шаурма, Пицца в Ноокате | Ноокатта фастфуд',
  description: 'Koroz Food — фастфуд в Ноокате, Ош, Кыргызстан. Бургеры, шаурма, пицца, роллы. Заказ WhatsApp: +996505250225. • Ноокатта бургер, шаурма, пицца, роллдор. Даамдуу тамак. WhatsApp аркылуу заказ бериңиз.',
  keywords: [
    'Koroz Food',
    'Короз Фуд',
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
    'заказать еду Ноокат',
    'Ноокатта фастфуд',
    'Ноокатта бургер',
    'Ноокатта шаурма',
    'Ноокатта пицца',
    'Ноокатта роллдор',
    'Ноокатта тамак',
    'тамак заказ Ноокат',
    'Ноокат тамак жеткирүү',
    'Кыргызстан фастфуд',
    'Корз Фуд Ноокат',
    'Ош фастфуд',
    'Ош бургер',
  ],
  openGraph: {
    title: 'Koroz Food — Бургеры, Шаурма, Пицца в Ноокате | Ноокатта фастфуд',
    description: 'Фастфуд в Ноокате, Ош. Бургеры, шаурма, пицца, роллы. Заказ через WhatsApp. • Ноокатта бургер, шаурма, пицца. WhatsApp аркылуу заказ бериңиз.',
    locale: 'ru_KG',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru-KG">
      <body className={`${oswald.variable} font-oswald bg-[#0a0a0a] text-white`}>{children}</body>
    </html>
  );
}
