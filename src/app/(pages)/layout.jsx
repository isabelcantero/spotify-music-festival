import Providers from "@/components/Providers";
import Header from "@/components/Header";
import './globals.css'
import { dm_sans } from '@/lib/fonts/fonts-google'

export const metadata = {
  title: 'Spotify Music Festival',
  description: 'Create your ideal music festival based on your Spotify',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}