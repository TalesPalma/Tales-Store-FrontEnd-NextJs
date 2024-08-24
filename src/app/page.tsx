import { CardProduct } from "./components/CardProduct";
import { ProductInterface } from "./models/product";
import styles from "./page.module.css";
import { getProductsFromApi } from "./services/api/products";


export default async function Home() {

  let products: ProductInterface[] = []
  try {
    products = await getProductsFromApi()
  } catch (error) {
    return (
      <div className={styles.erro}>
        <h1>Not found products</h1>
      </div>
    )
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to TALE STORE</h1>
      <div className={styles.cardSection}>
        {products && products.length > 0 && products.map((product) =>
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
