import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const addNewTodos = (data) => {
    axios.post(`${API_URL}/todos`, {data});
}