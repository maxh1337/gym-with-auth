import styles from "./register.module.scss";
import {Link} from "react-router-dom";

const HeaderForAuth = () => {
    return (
        <div className={styles.container}>
            <Link to="/">Home</Link>
            <Link>About</Link>
            <Link>Workouts</Link>
            <Link>Pricing</Link>
            <Link>Community</Link>
            <Link>FAQ</Link>
        </div>
    );
};

export default HeaderForAuth;