import { useContextapi } from "@/ContextApi";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/displayTodo.module.css";
import Loading from "./Loading";
import Error from "./Error";

import SingleTodo from "./SingleTodo";

const DisplayTodo = () => {
  let { getTodo, todo } = useContextapi();
  let { IsLoading, data, IsError } = todo;

  useEffect(() => {
    getTodo();
  }, []);

  if (IsError) {
    return <Error />;
  }

  if (IsLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.conatiner}>
      <h1 className={styles.title}>Todos</h1>
      <div>
        {data.map((ele) => {
          return <SingleTodo key={ele._id} {...ele} />;
        })}
      </div>
    </div>
  );
};

export default DisplayTodo;
