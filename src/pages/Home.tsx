import styles from "./styles/Home.module.css";

const Home = () => (
  <div className={styles.homeContainer}>
    <h1 className={styles.homeTitle}>Welcome to the News Profile App!</h1>

    <div className={styles.homeDescription}>
      <p>
        This is a React tutorial app for testing authorization, viewing news,
        <br />
        and working with a user profile.
      </p>
      <p>
        Here you can try login/password verification, page protection,
        <br />
        saving authorization in localStorage, and requests to a real API.
      </p>
    </div>

    <div className={styles.homeNote}>
      To view the news, go to the <b>News</b> tab.
      <br />
      To work with your profile, log in using a test login.
    </div>

    <div className={styles.homeTestData}>
      <b>Test data:</b> Admin / 12345
    </div>
  </div>
);

export default Home;
