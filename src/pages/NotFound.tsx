import { Link } from "react-router-dom";

import styles from "./styles/NotFound.module.css";

const NotFound = () => (
  <div className={styles.container}>
    <div className={styles.code}>404 😕</div>

    <div className={styles.title}>Page Not Found</div>

    <div className={styles.text}>
      You may have entered the wrong address or followed an outdated link.
      <br />
      Try to navigate to main page.
    </div>

    <Link to="/" className={styles.linkHome}>
      To Main Page
    </Link>
  </div>
);

export default NotFound;
