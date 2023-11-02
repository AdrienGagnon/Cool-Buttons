import { useEffect, useRef } from 'react';
import styles from './Parameters.module.css';
import showElement from '../../../utils/showElement';

export default function Parameters({ showOptions }) {
    const parametersRef = useRef(null);

    useEffect(() => {
        showElement(showOptions, parametersRef.current);
    }, [showOptions]);

    return (
        <div ref={parametersRef} className={styles.parameters__container}>
            <div className={styles.label}>Corners</div>
            <div className={styles.display__container}>
                <div
                    className={[
                        styles.display__option,
                        styles.option__rounded,
                        styles.active,
                    ].join(' ')}
                >
                    <p>Rounded</p>
                </div>
                <div
                    className={[
                        styles.display__optio,
                        styles.option__square,
                    ].join(' ')}
                >
                    <p>Squared</p>
                </div>
            </div>
            <div className={styles.label}>Transition time</div>
            <div className={styles.display__container}>
                <input
                    id="transition__input"
                    className={styles.transition__input}
                />
            </div>
        </div>
    );
}
