import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Status from './(components)/Status'
import LatestBlocks from './(components)/LatestBlocks'
import LatestTransactions from './(components)/LatestTransactions'


export const revalidate = 1; // revalidate this page every 60 seconds


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* @ts-expect-error */}
    <Status/> 
    <div className="flex m-10 gap-10 justify-center">
      <LatestBlocks/>
      <LatestTransactions/>
    </div>
    </>
  )
}


