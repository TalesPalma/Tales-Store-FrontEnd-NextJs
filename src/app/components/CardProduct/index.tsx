import styles from "./CardProducts.module.css"


interface CardProductProps {
  title: string
  price: string
  imageUrl: string
}


export const CardProduct = ({ title, price, imageUrl }: CardProductProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="https://via.placeholder.com/160" />
      </div>
      <span className={styles.title}>title</span>
      <span className={styles.price}>$100</span>
    </div>
  )
}
