import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = props.basePrice + props.sizes.find(s => s.name === currentSize).additionalPrice;

  const addToCard = props => {
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
        <form>
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
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => {
                return (
                  <li key={color}>
                    <button className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={(e) => {
                      e.preventDefault();
                      setCurrentColor(color);
                    }}></button>
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
      </div>
    </article>
  )
};

export default Product;