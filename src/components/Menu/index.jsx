import React from "react";
import icons from "./icons.json";
import styles from "./menu.module.sass";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {icons.map((icon) => {
          return (
            <li key={icon.id} className={styles.menu__item}>
              <img src={icon.image} alt={icon.alt} />
              <a href={icon.link}>{icon.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
