import styles from "./preFooter.module.scss";
import logan from "../../../images/logan.png";

const PreFooter = () => {
  return (
    <div className={styles.preFooter}>
      <img alt="preFooter" src={logan} />
      <div>
        <h1>
          Wanna join <span className={styles.green}>&</span> have fun?
        </h1>
        <p>
          We’ll keep you updated on the things you need to know about Gymme.
          Nothing more, nothing less.
        </p>
      </div>
    </div>
  );
};

export default PreFooter;
