import styles from "./OptionColor.module.scss";
import clsx from "clsx";
import {useState} from 'react';

const OptionColor = (props) => {
    const prepareColorClassName = (color) => {
        return styles[
          "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
        ];
      };

      const [currentColor, setCurrentColor] = useState(props.colors[0]);

    return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((color) => {
          return (
            <li key={color}>
              <button
                className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={(e) => {
                e.preventDefault();
                setCurrentColor(color);
                }}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
    )
}

export default OptionColor;