import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    &copy; {new Date().getFullYear()} News Profile App
  </footer>
);

export default Footer;
