import styles from "./OptionSize.module.scss";
import clsx from "clsx";
import {useState} from 'react';

const OptionSize = (props) => {

    const addToCard = e => {
        e.preventDefault();
        return (
        console.log(`Summary 
        =============== 
        Name: ${props.title}
        Price: ${props.basePrice}
        Color: ${props.currentColor}
        Size: ${currentSize}`)
        )
      };

    const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

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
      </form>
    );
}

export default OptionSize;