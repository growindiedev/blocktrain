import './globals.scss'
//import styles from './page.module.css'
import Navbar from './(components)/Navbar'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
