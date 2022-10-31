import styles from "./ProductForm.module.scss";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import OptionSize from "../OptionSize/OptionSize";


const ProductForm = (props) => {
    return (
      <form onSubmit={props.addToCard}>
        <OptionSize
          currentSize={props.currentSize}
          sizes={props.sizes}
          setCurrentSize={props.setCurrentSize}
        />
        <OptionColor 
          colors={props.colors} 
          currentColor={props.currentColor}
          setCurrentColor={props.setCurrentColor}
        />
        <Button type={"submit"} className={styles.button}>
        <span className="fa fa-shopping-cart" />
        </Button>
      </form>
    );
}

export default ProductForm;
