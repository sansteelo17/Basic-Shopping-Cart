import ProductItem from "./ProductItem";
import classes from "./Product.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    name: "My First Book",
    description: "The first book i ever wrote",
  },
  {
    id: "p2",
    price: 5,
    name: "My Second Book",
    description: "The second book i ever wrote",
  },
];

const Product = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Product;
