import React from "react";
import populars from "./populars.json";
import styles from "./index.module.sass";

export default function Populars() {
  return (
    <aside className={styles.populars}>
      <h2>Populars</h2>
      <ul className={styles.populars__images}>
        {populars.map((popular) => {
          return (
            <li key={popular.id}>
              <img src={popular.path} alt={popular.alt} />
            </li>
          );
        })}
      </ul>
      <button>See more</button>
    </aside>
  );
}
