import React from "react";
import styles from "./index.module.sass";
import images from "../Gallery/images.json";

export default function Tags({ tags, filterImages, setItens }) {
  return (
    <div className={styles.tags}>
      <p className={styles.p}>Filter w/ Tags</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filterImages(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(images)}>All</li>
      </ul>
    </div>
  );
}
