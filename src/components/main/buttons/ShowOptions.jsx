import styles from './ShowOptions.module.css';

export default function ShowOptions({ toggleShowOptions }) {
    return (
        <div onClick={toggleShowOptions} className={styles.view__parameters}>
            <p>More options</p>
            <div className={styles.plus}>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
