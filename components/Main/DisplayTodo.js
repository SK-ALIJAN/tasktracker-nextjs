import { useContextapi } from "@/ContextApi";
import React, { useEffect } from "react";

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
    return <>Loading...</>;
  }

  return (
    <>
      {data.map((ele) => {
        return (
          <div key={ele._id}>
            <header>{ele.todo}</header>
            <p>{ele.isComplete.toString()}</p>
          </div>
        );
      })}
    </>
  );
};

export default DisplayTodo;
