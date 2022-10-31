import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState, useMemo } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = (basePrice, additionalPrice) => {
    return basePrice + additionalPrice;
  };

  const fullPrice = useMemo (() => getPrice(props.basePrice, props.sizes.find((item) => item.name === currentSize).additionalPrice),
    [props.basePrice, currentSize, props.sizes]
  );

  const addToCard = e => {
    e.preventDefault();
    return (
    console.log(`Summary 
    =============== 
    Name: ${props.title}
    Price: ${fullPrice}
    Color: ${currentColor}
    Size: ${currentSize}`)
    )
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {fullPrice}$</span>
        </header>
        <ProductForm
         colors={props.colors}
         currentColor={currentColor}
         setCurrentColor={setCurrentColor}
         currentSize={currentSize}
         setCurrentSize={setCurrentSize}
         sizes={props.sizes}
         addToCard={addToCard}
         />
      </div>
    </article>
  )
};

export default Product;