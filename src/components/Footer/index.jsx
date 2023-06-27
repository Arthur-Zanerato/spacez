import React from "react";
import facebook from "./icons/facebook.svg";
import twitter from "./icons/twitter.svg";
import instagram from "./icons/instagram.svg";
import styles from "./index.module.sass";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook icon" />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter icon" />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram icon" />
        </a>
      </div>
      <p>Developed by Arthur Zanerato</p>
    </footer>
  );
}
