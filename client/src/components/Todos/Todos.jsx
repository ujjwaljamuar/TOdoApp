import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTodos } from "../../redux/actions/api.js";
import Todo from "../Todo/Todo.jsx";
import './Todos.css';

const Todos = () => {
    
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    
    useEffect(() => {
        dispatch(fetchTodos());
    }, []);
    
    return(
        <article>
            <ul>
                {
                    todos.map(todo => (
                        <Todo 
                            key= {todo._id}
                            todo= {todo} 
                        />
                    ))
                }
            </ul>
        </article>
    ) 
};

export default Todos;
