import styles from "./ProductForm.module.scss";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import OptionSize from "../OptionSize/OptionSize";


const ProductForm = (props) => {

  const summary = (e) => {
    e.preventDefault();
    console.log("Summary: ", props.shoppingSummary);
    }
    return (
        <form onSubmit={addToCard}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => {
                return (
                  <li key={size.name}>
                    <button className={clsx((size), size === currentSize && styles.active)} onClick={(e) => {
                      e.preventDefault();
                      setCurrentSize(size.name);
                    }}>{size.name}</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button className={styles.button} onClick={(e) => {
            e.preventDefault();
            addToCard(props)
          }}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    );
}

export default ProductForm;
