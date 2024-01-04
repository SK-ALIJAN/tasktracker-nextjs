import React, { useEffect, useState } from "react";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styles from "@/styles/displayTodo.module.css";
import GetLsData from "@/lib/GetLsData";

const SingleTodo = ({ todo, isComplete }) => {
  let [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(GetLsData("userName"));
  }, []);

  return (
    <div>
      <header>{todo}</header>
      <div className={styles.buttomDiv}>
        <p>Author : {userName && userName}</p>

        <div>
          <button>
            {isComplete ? <IoMdDoneAll /> : <MdOutlineIncompleteCircle />}
          </button>
          <button>
            <FaRegEdit />
          </button>
          <button>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
