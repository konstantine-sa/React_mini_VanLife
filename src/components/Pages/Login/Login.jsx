import React from "react";
import styles from "./Login.module.css";
import ButtonLarge from "../../Buttons/ButtonLarge/ButtonLarge";
import { Link, useLoaderData } from "react-router-dom";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const message = useLoaderData();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className={styles.container}>
      {message && <h2>{message}</h2>}
      <h1 className={styles.title}>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
      </form>
      <div className={styles.buttonWrap}>
        <ButtonLarge className={styles.button} buttonName="Log in" />
      </div>
      <div className={styles.createAccountWrap}>
        <p>Don’t have an account?</p>
        <Link>Create one now</Link>
      </div>
    </div>
  );
}
