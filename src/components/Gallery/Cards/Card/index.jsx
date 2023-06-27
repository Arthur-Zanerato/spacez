import React from "react";
import open from "./images/open.png";
import favorite from "./images/favorite.png";

export default function Card({ image, styles }) {
  return (
    <li className={styles.gallery__card}>
      <img
        className={styles.gallery__image}
        src={image.image}
        alt={image.title}
      />
      <p className={styles.gallery__description}>{image.title}</p>
      <div>
        <p>{image.credits}</p>
        <span>
          <img src={open} alt="modal icon" />
          <img src={favorite} alt="like icon" />
        </span>
      </div>
    </li>
  );
}
