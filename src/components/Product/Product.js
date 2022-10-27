import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = props.basePrice + props.sizes.find(s => s.name === currentSize).additionalPrice;

  const addToCard = e => {
    e.preventDefault();
    return (
    console.log(`Summary 
    =============== 
    Name: ${props.title}
    Price: ${props.basePrice}
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
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
        colors={props.colors}
        actionColor={setCurrentColor}
        currentColor={currentColor}
        size={props.size}
        actionSize={setCurrentSize}
        currentSize={currentSize}
        shoppingSummary={shoppingSummary}
        onClick={props.onClick}
        prise={props.basePrice}
        sizes={props.sizes}/>
      </div>
    </article>
  )
};

export default Product;