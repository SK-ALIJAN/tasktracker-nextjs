import React, { useState } from "react";

import styles from "@/styles/Input.module.css";

const InputField = () => {
  let [btn, setBtn] = useState(false);
  let [text, setText] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    setBtn(true);

    

    setText("");
    setTimeout(() => {
      setBtn(false);
    }, 2000);
  };

  let handleChange = (e) => {
    setText(e.target.value.trim());
  };

  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter ToDo"
          onChange={handleChange}
          value={text}
        />
        <button disabled={btn}>Submit</button>
      </form>
    </div>
  );
};

export default InputField;
