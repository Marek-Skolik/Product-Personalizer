import styles from "./ProductForm.module.scss";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import OptionSize from "../OptionSize/OptionSize";


const ProductForm = (props) => {

    return (
      <form>
        <OptionSize
        size={props.size}
        currentSize={props.currentSize}
        price={props.basePrice}
        sizes={props.sizes} />
        <OptionColor 
        colors={props.colors} 
        currentColor={props.currentColor}
        />
        <Button type={"submit"} onSubmit={props.addToCard} className={styles.button}>
        <span className="fa fa-shopping-cart" />
        </Button>
        </form>
    );
}

export default ProductForm;
