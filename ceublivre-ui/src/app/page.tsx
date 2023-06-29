import Image from 'next/image'
import styles from './page.module.css'
import Information from "@/app/information/[id]/page";
import Purchases from "@/app/purchases/page";

export default function Home() {
  return (
    <main>
      <div>
          <Purchases params={{
          id: ''
        }} />
       
      </div>
    </main>
  )
}
