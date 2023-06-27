import Banner from "../../components/Banner";
import styles from "./index.module.sass";

import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Header from "components/Header";
import Menu from "components/Menu";
import Populars from "components/Populars";

export default function InitialPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.gallery}>
          <Gallery />
          <Populars />
        </div>
      </main>
      <Footer />
    </>
  );
}
