import React from "react";
import Card from "./Card";

export default function Cards({ images, styles }) {
  return (
          <ul className={styles.gallery__cards}>
            {images.map((image) => {
              return <Card key={image.id} image={image} styles={styles} />;
            })}
          </ul>
  );
}
