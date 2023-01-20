import styles from "./hero.module.scss";
import Header from "../header/header";
import hero from "../../images/hero.png";
import Mission from "./mission/mission";
import Coaches from "./coaches/coaches";
import Prices from "./prices/prices";
import Footer from "./footer/footer";
import PreFooter from "./preFooter/preFooter";

const Main = () => {
  return (
    <>
      <div className={styles.hero}>
        <Header />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                Get the best part <br /> of your day <br />
                <span className={styles.green}>– you fit here.</span>
              </p>
              <p>
                We provide serious fitness but within a fun and friendly, safe
                space.
              </p>
            </div>
            <button>Join Now</button>
          </div>
          <img className={styles.image} src={hero} alt="hero" />
        </div>
      </div>
      <Mission />
      <Coaches />
      <Prices />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Main;
