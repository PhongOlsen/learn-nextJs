import type { NextPage } from 'next';
import styles from '../styles/Movie.module.css';
import {useState} from "react";
import _clsx from "clsx";
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Home: NextPage = () => {
    const [numberChair, setNumberChair] = useState<number>(10);
    const [numberChairSelected, setNumberChairSelected] = useState<number | null>(null);
    const [isFinding, setIsFinding] = useState<boolean>(false);
    const [numberRandomInProcessing, setNumberRandomInProcessing] = useState<number>(1);
    const [timeoutRunProcessing, setTimeoutRunProcessing] = useState<number>(10);

    const handleFindChairRandom = () => {
        setIsFinding(true);
        const interValSetNumberInProcessing = setInterval(handleSetNumberRandomInProcessing, 50);
        setTimeout(() => {
            const value = Math.floor(Math.random() * (numberChair)) + 1;
            setNumberChairSelected(value);
            setIsFinding(false);
            clearInterval(interValSetNumberInProcessing);
        }, timeoutRunProcessing * 1000)
    }

    const handleSetNumberRandomInProcessing = () => {
        setNumberRandomInProcessing((prev) => {
            if (prev === numberChair || prev > numberChair) return 1;
            return prev + 1;
        });
    }

  return (
    <div className={styles.container}>
        <div className={styles.listChair}>
            {Array.from({ length: numberChair }, (_, i) => i + 1).map((item) => {
                return (
                    <div key={item}
                         className={_clsx(styles.chairItem,
                             (!isFinding && numberChairSelected === item) && styles.selectedChair,
                             (isFinding && numberRandomInProcessing === item) && styles.chairInProcessRunning)}
                    >
                        <p className={styles.numberChair}>{item}</p>
                    </div>
                )
            })}
        </div>
        <div className={styles.actionFooter}>
            <div>
                <label className={styles.label}>set number chair</label>
                <input placeholder="set number chair" type="number" value={numberChair} onChange={(event) => setNumberChair(Number(event.target.value))}/>
            </div>
            <div>
                <label className={styles.label}>set timeout run find (s)</label>
                <input placeholder="set timeout run find" type="number" value={timeoutRunProcessing} onChange={(event) => setTimeoutRunProcessing(Number(event.target.value))}/>
            </div>
            <div className={styles.btnFindChairContainer}>
                <button className={styles.btnFindChair} onClick={handleFindChairRandom}>Find Chair Random</button>
            </div>
        </div>
    </div>
  )
}

// export default Home;

export default withAuthenticationRequired(Home, {
    onRedirecting: () => <>Loading ...</>,
})

export async function getServerSideProps() {
    return {
        props: {
            content: "Hello World !!"
        }
    }
}
