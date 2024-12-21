import styles from "./styles.module.css";

const { category, categoryImg, categoryTitle } = styles;

const Category = () => {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <img src="https://placecats.com/300/300" alt="Cat Placeholder" />
      </div>
      <h4 className={categoryTitle}>Title</h4>
    </div>
  );
};

export default Category;
