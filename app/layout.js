import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata = {
  title: 'Transformational Sports',
  description:
    'Transformational Sports by Liz Haynes — empowering athletes and individuals through transformative coaching, mindset training, and holistic sports development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
