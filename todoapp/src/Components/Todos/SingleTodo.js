import React, {useState, useContext} from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import {FaTrashAlt, FaEdit} from "react-icons/fa";
import TodoEdit from './TodoEdit'
import axios from 'axios'


export default function SingleTodo(props) {
  const {currentUser} = useContext(AuthContext)
  const [showEdit, setShowEdit] = useState(false);

  const deleteTodo = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.todo.name}?`)) {
      axios.delete(`https://localhost:7075/api/Todos/${id}`).then(() => {props.getTodos()})
    }
  }

  return (
    <div className='singleTodo col-md-5 m-4'>
        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
          <div>
            <button id='editLink' onClick={() => setShowEdit(true)}>
              <FaEdit />
            </button>
            <button className='m-1 rounded' id='deleteLink' onClick={() => deleteTodo(props.todo.todoId)}>
              <FaTrashAlt />
            </button>

            {showEdit &&
              <TodoEdit
                todo={props.todo}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
                getTodos={props.getTodos} />
            }
          </div>
        }

        <h3>{props.todo.name}</h3>
        {props.todo.description !== null ?
            <p>{props.todo.description}</p> :
            <p>No Description Provided</p>
        }
    </div>
  )
}
