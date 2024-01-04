import { createContext, useContext, useState } from "react";
import axios from "axios";
import SetLsData from "./lib/SetLsData";

const ContextApi = createContext(null);
const baseUrl = `https://task-tracker-backend-azure.vercel.app`;
let UserCredencial = {
  IsLoading: false,
  name: "",
  email: "",
  IsRegister: false,
  IsError: false,
  token: "",
};

let todoData = {
  IsLoading: false,
  data: [],
  IsError: false,
};

const ContextProvider = ({ children }) => {
  let [user, setUser] = useState(UserCredencial);
  let [todo, setTodo] = useState(todoData);

  async function register(name, email) {
    try {
      setUser((prev) => {
        return { ...prev, IsLoading: true };
      });
      let { data } = await axios.post(`${baseUrl}/user`, { name, email });
      // setting data to localStorage
      SetLsData("token", data.token);
      SetLsData("isRegister", true);
      SetLsData("userName", name);

      setUser((prev) => {
        return {
          ...prev,
          IsLoading: false,
          name,
          email,
          IsRegister: true,
          IsError: false,
          token: data.token,
        };
      });
    } catch (error) {
      setUser((prev) => {
        return { ...prev, IsError: true, IsLoading: false };
      });
    }
  }

  async function getTodo() {
    const headers = {
      Authorization: `Bearer ${user.token}`,
    };

    try {
      setTodo((prev) => {
        return { ...prev, IsLoading: true };
      });
      let { data } = await axios.get(`${baseUrl}/todo`, { headers });
      setTodo((prev) => {
        return { ...prev, IsLoading: false, IsError: false, data: data };
      });
    } catch (error) {
      setTodo((prev) => {
        return { ...prev, IsError: true, IsLoading: false };
      });
    }
  }

  async function createTodo(newObj) {
    const headers = {
      Authorization: `Bearer ${user.token}`,
    };
    try {
      setTodo((prev) => {
        return { ...prev, IsLoading: true };
      });
      let data = await axios.post(`${baseUrl}/todo`, newObj, { headers });
      setTodo((prev) => {
        let allTodo = [...user.data, newObj];
        return { ...prev, IsLoading: false, data: allTodo, IsError: false };
      });
    } catch (error) {
      setTodo((prev) => {
        return { ...prev, IsError: true, IsLoading: false };
      });
    }
  }

  async function updateTodo(id, updatedData) {
    try {
      setTodo((prev) => {
        return { ...prev, IsLoading: true };
      });
      let data = await axios.patch(`${baseUrl}/todo/${id}`, updatedData);
      setTodo((prev) => {
        return { ...prev, IsLoading: false, IsError: false };
      });
    } catch (error) {
      setTodo((prev) => {
        return { ...prev, IsError: true, IsLoading: false };
      });
    }
  }

  async function deleteTodo(id) {
    try {
      setTodo((prev) => {
        return { ...prev, IsLoading: true };
      });
      let data = await axios.delete(`${baseUrl}/todo/${id}`);
      setTodo((prev) => {
        return { ...prev, IsLoading: false, IsError: false };
      });
    } catch (error) {
      setTodo((prev) => {
        return { ...prev, IsError: true, IsLoading: false };
      });
    }
  }

  let Datas = {
    user,
    register,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
  };

  return <ContextApi.Provider value={Datas}>{children}</ContextApi.Provider>;
};

export { ContextProvider };

// Custom hook to access the context
export let useContextapi = () => {
  const context = useContext(ContextApi);
  return context;
};
