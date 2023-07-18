import './globals.css'
import { dm_sans } from '../utils/fonts.js'

export const metadata = {
  title: 'Spotify Music Festival',
  description: 'Create your ideal music festival based on your Spotify',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body>
        {/* 
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Acerca de</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </nav>
        */}
        {children}
        </body>
    </html>
  )
}
