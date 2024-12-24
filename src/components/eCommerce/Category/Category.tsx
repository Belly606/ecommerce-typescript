import { TCategory } from "@cutomTypes/category";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

const Category = ({ name, img, prefix }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={name} />
        </div>
        <h4 className={categoryTitle}>{name}</h4>
      </Link>
    </div>
  );
};

export default Category;
