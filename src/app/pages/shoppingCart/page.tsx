import { CardCart } from "@/app/components/CardCart"
import styles from "./cart.module.css"

export default function Store() {
  const listProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className={styles.container}>
      {listProducts.map(product => <CardCart key={1} />)}
    </div >
  )
}
