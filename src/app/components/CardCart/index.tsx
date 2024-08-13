import Image from "next/image"
import styles from "./CardCart.module.css"


interface CardCartProps {
  title: string
  price: string
  imageUrl: string
}



export const CardCart = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src="https://via.placeholder.com/160"
        alt="nada ainda" width={100}
        height={100}
      />
      <p className={styles.nameProduct}>Name product</p>
      <p className={styles.price}>100R$</p>
      <button className={styles.buttonRemove}>remove</button>
    </div>
  )
}
