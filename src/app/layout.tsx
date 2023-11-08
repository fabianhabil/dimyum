import '@/styles/globals.css';
import { TailwindIndicator } from '@/components/atoms/TailwindIndicator/TailwindIndicator';
import { siteConfig } from '@/components/constants/site';
import { fontExpandedRegular, fontIntegralBold, fontMontserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={cn(
            'min-h-screen antialiased',
            fontMontserrat.variable,
            fontExpandedRegular.variable,
            fontIntegralBold.variable,
            'font-montserrat'
          )}
          suppressHydrationWarning={true}
        >
          <div>{children}</div>
          <TailwindIndicator />
        </body>
      </html>
    </>
  );
}
