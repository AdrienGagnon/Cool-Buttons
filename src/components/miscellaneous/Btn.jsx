import styles from './Btn.module.css';

export default function ToMainBtn({
    text,
    btnRef,
    children,
    customClass = undefined,
}) {
    return (
        <div
            ref={btnRef}
            className={[
                styles['btn-container'],
                customClass ? styles[customClass] : '',
            ].join(' ')}
        >
            <div className={styles.background}></div>
            <span className={styles['btn-text']}>{text}</span>
            {children}
        </div>
    );
}
