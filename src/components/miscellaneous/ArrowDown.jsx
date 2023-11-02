import styles from './ArrowDown.module.css';

export default function ArrowDown() {
    return (
        <div className={styles['arrow-container']}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 11"
                aria-hidden="true"
            >
                <path d="M4.055 0v7.71l-3-3L0 5.79l4.805 4.804 4.804-4.805-1.054-1.078-3 3V0h-1.5Z"></path>
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 11"
                aria-hidden="true"
            >
                <path d="M4.055 0v7.71l-3-3L0 5.79l4.805 4.804 4.804-4.805-1.054-1.078-3 3V0h-1.5Z"></path>
            </svg>
        </div>
    );
}
