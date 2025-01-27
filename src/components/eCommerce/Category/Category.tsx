import { Link } from "react-router-dom";
import { TCategory } from "@types";

import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

const Category = ({ prefix, img, name }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={name} />
        </div>
        <h4 className={categoryTitle}>{name}</h4>
      </Link>
    </div>
  );
};

export default Category;
