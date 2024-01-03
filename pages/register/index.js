import Head from "next/head";
import React, { useRef, useState } from "react";
import styles from "@/styles/Register.module.css";

const register = () => {
  let [text, setText] = useState({ name: "", email: "" });

  let handleSubmit = (event) => {
    event.preventDefault();
    setText((prev) => {
      return { ...prev, name: "", email: "" };
    });
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setText((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Register user</title>
        <meta name="description" content="User register in todo app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.modal}>
        <h1>Register user</h1>
        <form action="#" onSubmit={handleSubmit}>
          <div className={styles.childContainerDiv}>
            <label>Name</label>
            <input
              type="text"
              required
              name="name"
              onChange={handleChange}
              value={text.name}
            />
          </div>

          <div className={styles.childContainerDiv}>
            <label>Email</label>
            <input
              type="email"
              required
              name="email"
              onChange={handleChange}
              value={text.email}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default register;
