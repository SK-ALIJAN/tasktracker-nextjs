import { useContextapi } from "@/ContextApi";
import GetLsData from "@/lib/GetLsData";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Navber.module.css";

const Navber = () => {
  let [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(GetLsData("userName"));
  }, []);

  return (
    <div className={styles.container}>
      <header>TodoDoApp;</header>
      <p>Logged in as <span>{userName && userName}</span></p>
    </div>
  );
};

export default Navber;
