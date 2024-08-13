import Link from "next/link";
import { CardProduct } from "./components/CardProduct";
import styles from "./page.module.css";


// async function consumeApi(): Promise<ConsumeCardApi[]> {
//   try {
//     const response = await fetch("http://localhost:8080/personalidade", { cache: "no-store" })
//
//     if (!response.ok) {
//       throw new Error("Failed to fetch data")
//     }
//     const data: ConsumeCardApi[] = await response.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
//   return []
// }

export default async function Home() {
  // const data = await consumeApi()
  // console.log("Testando", data)
  return (
    <main className={styles.main}>
      <Link href="/details" className={styles.cardSection}>
        <CardProduct />
      </Link>
    </main>
  );
}
