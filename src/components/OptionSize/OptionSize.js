import styles from "./OptionSize.module.scss";
import clsx from "clsx";

const OptionSize = (props) => {

    return (
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map((size) => {
            return (
              <li key={size.name}>
                <button type="button" className={clsx((size), size.name === props.currentSize && styles.active)} onClick={(e) => {
                  e.preventDefault();
                  props.setCurrentSize(size.name);
                }}>{size.name}</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default OptionSize;