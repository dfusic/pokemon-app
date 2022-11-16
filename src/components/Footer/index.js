import styles from './style.module.css'

const Footer = ({children}) => (
    <footer className={styles.footer}>
        {children}
    </footer>
)

export default Footer;