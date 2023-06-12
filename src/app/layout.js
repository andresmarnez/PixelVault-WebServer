import './globals.css'
import 'public/css/bootstrap.css'
import { Inter } from 'next/font/google'
import NavBar from '../pages/components/navbar'
import SearchBar from '../pages/components/searchbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pixel Vault',
  description: 'Developed by Andres Sanchez Martinez.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body >
        <NavBar></NavBar>
        <div className="right">        
          <div className="top-container">
            <SearchBar></SearchBar>
            <div className={inter.className}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
