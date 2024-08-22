import Link from "next/link";
import { CardCart } from "../components/CardCart";
import styles from "./store.module.css"

export default function store() {

  const listProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className={styles.container}>
      {listProducts.map(product => <CardCart />)}
    </div >
  )
}
