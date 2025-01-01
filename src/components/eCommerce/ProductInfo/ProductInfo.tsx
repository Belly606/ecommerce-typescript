import styles from "./style.module.css";

type productInfoProps = {
  title: string;
  images: string[];
  price: number;
  description?: string;
  direction?: "row" | "column";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const ProductInfo = ({
  title,
  images,
  price,
  description,
  direction = "row",
  children,
  style,
}: productInfoProps) => {
  return (
    <div className={`${styles[`product-${direction}`]}`} style={style}>
      <div className={`${styles[`productImg-${direction}`]}`}>
        <img src={images[0]} alt={title} />
      </div>
      <div className={`${styles[`productInfo-${direction}`]}`}>
        <h2>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        <p className={`${styles[`productDescription-${direction}`]}`}>
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default ProductInfo;
