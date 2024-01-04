import React, { useEffect, useState } from "react";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styles from "@/styles/displayTodo.module.css";
import GetLsData from "@/lib/GetLsData";
import { useContextapi } from "@/ContextApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleTodo = ({ todo, isComplete, _id }) => {
  let [userName, setUserName] = useState("");
  let [completed, setCompleted] = useState(isComplete);
  let { deleteTodo, updateTodo, user } = useContextapi();

  useEffect(() => {
    setUserName(GetLsData("userName"));
  }, []);

  let handleComplete = () => {
    setCompleted((prev) => !completed);
    if (completed) toast.info("Marked as not completed!");
    else toast.success("Marked as completed");
    // updateTodo(_id, { isComplete: completed });
  };
  let handleDelete = (id) => {
    deleteTodo(id);
    toast.success("todo deleted successfully!");
  };

  return (
    <div>
      <header>{todo}</header>
      <div className={styles.buttomDiv}>
        <p>Author : {userName && userName}</p>

        <div>
          <button onClick={handleComplete}>
            {completed ? <IoMdDoneAll /> : <MdOutlineIncompleteCircle />}
          </button>
          <button>
            <FaRegEdit />
          </button>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleTodo;
