import React, {useState, useEffect, useContext} from 'react'
import { AuthContext, getUser } from '../../Contexts/AuthContext'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import CatCreate from './CatCreate'

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const [showCreate, setShowCreate] = useState(false)

    const getCategories = () => {
        axios.get(process.env.REACT_APP_API_URL + '/Categories').then(response => {
            console.log(response)
            setCategories(response.data)
        })
    }
    useEffect(() => {
        getCategories()
    }, []);
    return (
        <section className='categories'>
            <article className='bg-info p-5'>
                <h1 className='text-center'>Categories Dashboard</h1>
            </article>
            {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
                <div className='bg-dark p-2 mb-3 text-center'>
                    {showCreate ?
                        <>
                            <button onClick={() => setShowCreate(false)} className='btn btn-warning'>Cancel</button>
                            <CatCreate
                                getCategories={getCategories}
                                setShowCreate={setShowCreate} />
                        </>
                        : <button className='btn btn-info' onClick={() => setShowCreate(true)}>Create Category</button>
                    }
                </div>
            }
         <container className='p-2'>
            <table className='table bg-info table-white my-3'>
                <thead className='table-secondary text-uppercase'>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && 
                            <th>Actions</th>
                        }
                    </tr>
                    </thead>
                <tbody>
                {categories.map(x => 
                   <SingleCategory key={x.categoryId} category={x} getCategories={getCategories} />
                        
                   )}
              </tbody>
            </table>
        </container>
    </section>
  )
}