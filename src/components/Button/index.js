import styles from './style.module.css'

const Button = ({label, onClick}) => (
    <button onClick={onClick} className={styles.button}>{label}</button>
)

export default Button