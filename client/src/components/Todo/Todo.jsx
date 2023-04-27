import './Todo.css'
import { toggleTodo } from '../../redux/actions/api';
import { useDispatch } from 'react-redux';

const Todo = ({todo}) => {

    const dispatch = useDispatch();
    return (
        <li 
            className="task"
            onClick={()=> dispatch(toggleTodo(todo._id))}>
                <span>{todo.data}</span>
                <span className='icon'> <i className="fa fa-trash"></i></span>
                <span className='icon'> <i className="fa fa-pen"></i></span>
        </li>
    )
}

export default Todo; 