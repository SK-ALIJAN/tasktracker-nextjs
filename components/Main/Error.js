import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import Styles from "@/styles/error.module.css";

const Error = () => {
  return (
    <div className={Styles.error_container}>
      <FaExclamationCircle className={Styles.error_icon} />
      <p className={Styles.error_message}>Something went wrong</p>
    </div>
  );
  _;
};
export default Error;
