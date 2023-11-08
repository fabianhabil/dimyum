import { JetBrains_Mono as FontMono, Inter as FontSans, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const fontExpandedRegular = localFont({
  src: '../fonts/Fontspring-DEMO-arlen-expandedregular.otf',
  preload: true,
  variable: '--font-expanded-regular'
});

export const fontIntegralBold = localFont({
  src: '../fonts/Fontspring-DEMO-integralcf-bold.otf',
  preload: true,
  variable: '--font-integral-bold'
});

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const fontMontserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
