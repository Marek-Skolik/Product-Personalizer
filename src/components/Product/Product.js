import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = props.basePrice + props.sizes.find(s => s.name === props.currentSize).additionalPrice;

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={props.currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
         colors={props.colors}
         currentColor={currentColor}
         setCurrentColor={setCurrentColor}
         size={props.size}
         currentSize={currentSize}
         setCurrentSize={setCurrentSize}
         onClick={props.onClick}
         sizes={props.sizes}
         />
      </div>
    </article>
  )
};

export default Product;