import React, { useState } from "react";
import images from "./images.json";
import Tags from "../Tags";
import styles from "./index.module.sass";
import Cards from "./Cards";

export default function Gallery() {
  const [itens, setItens] = useState(images);
  const tags = [...new Set(images.map((value) => value.tag))];

  const filterImages = (tag) => {
    const newImages = images.filter((image) => {
      return image.tag === tag;
    });

    setItens(newImages);
  };

  return (
    <section className={styles.gallery}>
      <h2>Explore the gallery!</h2>
      <Tags tags={tags} filterImages={filterImages} />
      <Cards images={itens} styles={styles} setItens={setItens} />
    </section>
  );
}
