import { useContextapi } from "@/ContextApi";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/displayTodo.module.css";
import Loading from "./Loading";
import Error from "./Error";
import { IoMdSad } from "react-icons/io";
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
        {!data.length == 0 ? (
          <>
            {data.map((ele) => {
              return <SingleTodo key={ele._id} {...ele} />;
            })}
          </>
        ) : (
          <div className={styles.NoData}>
            <p>{<IoMdSad />}</p>
            <h1>No data</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayTodo;
