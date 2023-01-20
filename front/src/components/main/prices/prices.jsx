import styles from "./prices.module.scss";
import price from "../../../images/price.svg";
import priceW from "../../../images/priceWhite.svg";
import badge1 from "../../../images/badge1.svg";
import badge2 from "../../../images/badge2.svg";
import badge3 from "../../../images/badge3.svg";

const Prices = () => {
  return (
    <div className={styles.pricing}>
      <h1>Pricing plan</h1>

      <div className={styles.pricesContainer}>
        <div>
          <img alt="Current access status" src={badge1} />
          <h2>20$</h2>
          <h3>/month</h3>
          <ul>
            <li>
              <img src={price} />
              <p>unlimited gym access</p>
            </li>
            <li>
              <img src={price} />
              <p>1 training programs</p>
            </li>
            <li>
              <img src={price} />
              <p>free fitness consultation</p>
            </li>
          </ul>
          <button>JOIN NOW</button>
        </div>
        <div>
          <img alt="Current access status" src={badge2} />
          <h2>35$</h2>
          <h3>/month</h3>
          <ul>
            <li>
              <img src={priceW} />
              <p>unlimited gym access</p>
            </li>
            <li>
              <img src={priceW} />
              <p>5 training programs</p>
            </li>
            <li>
              <img src={priceW} />
              <p>free fitness consultation</p>
            </li>
            <li>
              <img src={priceW} />
              <p>personal trainer</p>
            </li>
          </ul>
          <button>JOIN NOW</button>
        </div>
        <div>
          <img alt="Current access status" src={badge3} />
          <h2>49$</h2>
          <h3>/month</h3>
          <ul>
            <li>
              <img src={price} />
              <p>unlimited gym access</p>
            </li>
            <li>
              <img src={price} />
              <p>all training programs</p>
            </li>
            <li>
              <img src={price} />
              <p>free fitness consultation</p>
            </li>
            <li>
              <img src={price} />
              <p>personal trainer</p>
            </li>
            <li>
              <img src={price} />
              <p>50% off drinks</p>
            </li>
          </ul>
          <button>JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Prices;
