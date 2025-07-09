import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

import type { RootState } from "../../app/store";

import styles from "./Header.module.css";

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const username = useSelector((state: RootState) => state.auth.username);

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          Main
        </Link>
        <Link
          to="/news"
          className={`${styles.link} ${
            pathname === "/news" ? styles.active : ""
          }`}
        >
          News
        </Link>
        <Link
          to="/profile"
          className={`${styles.link} ${
            pathname === "/profile" ? styles.active : ""
          }`}
        >
          Profile
        </Link>
        {!isAuth && (
          <Link
            to="/login"
            className={`${styles.link} ${
              pathname === "/login" ? styles.active : ""
            }`}
          >
            Sign in
          </Link>
        )}
        {isAuth && (
          <>
            <span className={styles.userBlock}>
              <span role="img" aria-label="user">
                👤
              </span>{" "}
              {username}
            </span>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Sign out
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
