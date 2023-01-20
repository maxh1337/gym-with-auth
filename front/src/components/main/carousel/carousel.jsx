import {cloneElement} from "react";
import {useEffect, useState, Children} from "react";
import join from "../../../images/join.svg";
import styles from "../coaches/coaches.module.scss";

const Carousel = ({children}, data) => {
    let count
    const [offset, setOffset] = useState(0);

    const PAGE_WIDTH = 640;


    const forward = () => {
        count = children[1].length
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;

            const maxOffset = -(PAGE_WIDTH * (count - 1));

            return Math.max(newOffset, maxOffset);
        });
    };

    const backward = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        });
    };
    return (
        <div className={styles.container}>
            <h1>Our Trainers</h1>
            <div
                className={styles.allCoachesContainer}
                style={{
                    transform: `translateX(${offset}px)`,
                }}
            >
                {children}
            </div>
            <div className={styles.arrowsContainer}>
                <button onClick={backward}>
                    <img alt="Arrow backward" src={join} className={styles.arrow}/>
                </button>
                <button onClick={forward}>
                    <img alt="Arrow forward" src={join}/>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
