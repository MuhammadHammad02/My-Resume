'use client'
import './globals.css'
import Navbar from './component/Navbar'
import { ThemeProvider } from 'next-themes'
import Footer from './component/Footer'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider enableColorScheme={true} attribute='class'>
        <Navbar/> {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  )
}
