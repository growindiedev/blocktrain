import './globals.css'
//import styles from './page.module.css'
import Navbar from './(components)/Navbar'
import SearchContainer from './(components)/SearchContainer'


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
        <SearchContainer/>
        {children}
      </body>
    </html>
  )
}

