import styles from "./header.module.scss";
import logo from "../../images/logo.svg";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

const Header = () => {
    const navigate = useNavigate()
    const {isAuth, setIsAuth} = useAuth()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('isCurrentUserAdmin')
        setIsAuth(false)
    }

    return (
        <div className={styles.navigation}>
            <div className={styles.container}>
                <img src={logo} width="85px" height="23" alt="header-logo"/>
                <div className={styles.buttons}>
                    <Link to="/">Home</Link>
                    <Link>About</Link>
                    <Link>Workouts</Link>
                    <Link>Pricing</Link>
                    <Link>Community</Link>
                    <Link>FAQ</Link>
                </div>
                <div className={styles.auth}>
                    {isAuth ? (
                        <button onClick={handleLogout}>Log out</button>
                    ) : (
                        <>
                            <Link to="/login" className={styles.login}>LOG IN</Link>
                            <Link to="/register" className={styles.register}>SIGN UP</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
