import styles from './CustomButton.module.css';

export default function CustomButton({ buttonData }) {
    return <button className={styles[`${buttonData.name}`]}>Hover me</button>;
}
