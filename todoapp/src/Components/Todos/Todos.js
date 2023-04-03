import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import SingleTodo from './SingleTodo.js'
import FilterCat from './Filtercat'
import TodoCreate from './TodoCreate'
import './Todos.css'

export default function Todos() {
     const [todos, setTodos] = useState([]);
     const {currentUser} = useContext(AuthContext)
     const [showCreate, setShowCreate] = useState(false)
    const [filter, setFilter] = useState(0);

     const getTodos = () => {
        axios.get(process.env.REACT_APP_API_URL + '/Todos').then(response => {
            setTodos(response.data)
        })
     }

     useEffect(() => {
        getTodos()
     }, []);

  return (
    <section className='todos'>
        <article className='bg-info p-5'>
            <h1 className='text-center'>Todo Dashboard</h1>
        </article>
        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
            <div className='bg-dark p-2 mb-3 text-center'>
                <button className='btn btn-info' onClick={() => setShowCreate(!showCreate)}>
                    {!showCreate ? 'Create New Todo item' : 'Close Form'}
                </button>
                <div className='createContainer'>
                    {showCreate &&
                        <TodoCreate getTodos={getTodos} setShowCreate={setShowCreate} />
                    }
                </div>
            </div>
        }
        <FilterCat setFilter={setFilter} />
        <Container>
            <article className='todoGallery row justify-content-center'>
                {filter === 0 ? todos.map(x =>
                    <SingleTodo key={x.todoId} todo={x} getTodos={getTodos} />
                ) :
                todos.filter(x => x.categoryId === filter).map(x =>
                    <SingleTodo key={x.todoId} todo={x} getTodos={getTodos} />
                )}
                {filter !== 0 && todos.filter(x => x.categoryId === filter).length === 0 &&
                    <h2 className='alert alert-warning text-dark'>
                        There are no results for this category.
                    </h2>
                }
            </article>
        </Container>
    </section>
  )
}
