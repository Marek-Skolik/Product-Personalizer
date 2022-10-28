import styles from "./OptionSize.module.scss";
import clsx from "clsx";

const OptionSize = (props) => {

    const addToCard = e => {
        e.preventDefault();
        return (
        console.log(`Summary 
        =============== 
        Name: ${props.title}
        Price: ${props.basePrice}
        Color: ${props.currentColor}
        Size: ${props.currentSize}`)
        )
      };

    return (
        <form onSubmit={addToCard}>
        <div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>
            {props.sizes.map((size) => {
              return (
                <li key={size.name}>
                  <button className={clsx((size), size === props.currentSize && styles.active)} onClick={(e) => {
                    e.preventDefault();
                    props.setCurrentSize(size.name);
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