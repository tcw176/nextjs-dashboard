import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
      template: '%s | HeyPal Dashboard',
      default: 'HeyPal Dashboard',
    },
    description: 'The HeyPal Sharing Site.',
    metadataBase: new URL('https://heypal.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}