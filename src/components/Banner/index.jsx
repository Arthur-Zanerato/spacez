import banner_image from "./images/banner.png";
import styles from "./index.module.sass";

export default function Banner() {
  return (
    <div className={styles.banner__image}>
      <h1>The most complete gallery in space</h1>
      <img src={banner_image} alt="Earth view from space" />
    </div>
  );
}
