import styles from "./mission.module.scss";
import join from "../../../images/join.svg";

const Mission = () => {
  return (
    <div className={styles.mission}>
      <h1>Our mission </h1>
      <p>
        We are distinguished by our unsurpassed motivating atmosphere,
        knowledgeable staff, and premier exercise equipment, which supports our
        members in meeting their individual fitness goals. The strength of our
        heart-felt identity is utilized to inspire every person that steps foot
        into our gyms to better themselves.
      </p>
      <div className={styles.join}>
        <p>JOIN NOW</p>
        <img alt="Join now" src={join} />
      </div>
    </div>
  );
};

export default Mission;
