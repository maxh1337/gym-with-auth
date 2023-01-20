import footer from "../../../images/logo.svg";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img alt="footer" src={footer} />
        <p>All rights reserved. Gymme 2021.</p>
      </div>
    </div>
  );
};

export default Footer;
