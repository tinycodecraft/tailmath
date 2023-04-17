import '@/styles/globals.css'
import MuThemeProvider from './ui/MuThemeProvider'
import { Metadata } from 'next';

export const metadata:Metadata = {
  generator: 'NextJs',
  applicationName: 'Cart Show',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Cart Show'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  colorScheme: 'dark',
  creator: 'Raymond Yau',
  publisher: 'RayMo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <MuThemeProvider>
        {children}
      </MuThemeProvider>
    </html>
  )
}
