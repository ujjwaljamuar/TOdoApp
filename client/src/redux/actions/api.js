import axios from 'axios';

import { ADDNEW_TODO } from './type.js' 

const API_URL = 'http://localhost:8080';

export const addNewTodos = (data) => async(dispatch) => {
    try{
        const res = await axios.post(`${API_URL}/todos`, {data});

        dispatch({type: ADDNEW_TODO, payload: res.data});

    } catch(error){
        console.log('error while adding new todo', error.message);
    }
    
}