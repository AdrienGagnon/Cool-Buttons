import { useEffect, useRef } from 'react';
import styles from './CodeSymbol.module.css';
import gsap from 'gsap';

export default function CodeSymbol({ codeSymbolRef }) {
    useEffect(() => {
        gsap.to(codeSymbolRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.5,
        });
    }, []);

    return (
        <div className={styles['symbol-container']}>
            <span ref={codeSymbolRef} className={styles['symbol-wrapper']}>
                <svg
                    className={styles.symbol}
                    viewBox="0 0 96 96"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
                </svg>
            </span>
        </div>
    );
}
