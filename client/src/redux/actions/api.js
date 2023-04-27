import axios from "axios";

import { ADDNEW_TODO, GETALL_TODOS, TOGGLE_TODO } from "./type.js";

const API_URL = "http://localhost:8080";

export const addNewTodos = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });

        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log("error while adding new todo", error.message);
    }
};

export const fetchTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);

        dispatch({ type: GETALL_TODOS, payload: res.data });
    } catch (error) {
        console.log("Error while fetchTodos API Call ", error.message);
    }
};

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while fetchTodos API Call ", error.message);
    }
};
