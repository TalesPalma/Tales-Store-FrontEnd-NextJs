import { CardProduct } from "./components/CardProduct";
import styles from "./page.module.css";
import { getProductsFromApi } from "./services/api/products";


export default async function Home() {
  const products = await getProductsFromApi()
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to TALE STORE</h1>
      <div className={styles.cardSection}>
        {products.map((product) =>
          <CardProduct
            key={product.id}
            title={product.name}
            price={product.price.toString()}
            imageUrl={product.image_url}
          />)}
      </div>

    </main>
  );
}
