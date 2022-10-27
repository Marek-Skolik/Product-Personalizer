import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

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
         size={props.size}
         currentSize={currentSize}
         onClick={props.onClick}
         sizes={props.sizes}
         />
      </div>
    </article>
  )
};

export default Product;