import { useContextapi } from "@/ContextApi";
import React, { useEffect } from "react";
import styles from "@/styles/displayTodo.module.css";
import Loading from "./Loading";

const DisplayTodo = () => {
  let { getTodo, todo } = useContextapi();
  let { IsLoading, data, IsError } = todo;

  useEffect(() => {
    getTodo();
  }, []);

  if (IsError) {
    return <>something went wrong</>;
  }

  if (IsLoading) {
    return <Loading/>;
  }

  return (
    <div className={styles.conatiner}>
      <div>
        {data.map((ele) => {
          return (
            <div key={ele._id}>
              <header>{ele.todo}</header>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayTodo;
