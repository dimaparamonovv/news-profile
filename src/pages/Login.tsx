import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

import styles from "../features/auth/Auth.module.css";

import {
  VALID_USER,
  VALID_PASS,
  LOGIN_ERROR_MESSAGE,
} from "../features/auth/constants";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const { username, password } = form;

      if (username === VALID_USER && password === VALID_PASS) {
        dispatch(login(username));

        setError("");

        navigate("/profile");
      } else {
        setError(LOGIN_ERROR_MESSAGE);
      }
    },
    [dispatch, form, navigate]
  );

  return (
    <div className={styles.loginContainer}>
      <div className={styles.title}>Sign in</div>

      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <input
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
          className={styles.input}
          required
          autoFocus
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>
          Login
        </button>

        {error && <div className={styles.error}>{error}</div>}
      </form>

      <div style={{ color: "#8e8e8e", fontSize: "0.97rem", marginTop: 8 }}>
        <b>Test data:</b> {VALID_USER} / {VALID_PASS}
      </div>
    </div>
  );
};

export default Login;
