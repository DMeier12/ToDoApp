import React, {useState, useContext} from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { FaTrashAlt, FaEdit, FaRegSave } from 'react-icons/fa'
import axios from 'axios'
import CatEdit from './CatEdit'

export default function SingleCategory(props) {
  const {currentUser} = useContext(AuthContext)
  const [showEdit, setShowEdit] = useState(false)

  const deleteCat = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.category.categoryName}?`)) {
      axios.delete(process.env.REACT_APP_API_URL+'/Categories/${id}').then(() => {props.getCategories()})
    }
  } 

  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{props.category.catDesc}</td>
        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
          <td>
            <button className='m-1 rounded' id='editLink' onClick={() => setShowEdit(true)}>
              <FaEdit />
            </button>
            <button className='m-1 rounded' id='deleteLink' onClick={() => deleteCat(props.category.categoryId)}>
              <FaTrashAlt />
          </button>
            {showEdit &&
              <CatEdit
                showEdit={showEdit}
                setShowEdit={setShowEdit}
                getCategories={props.getCategories}
                category={props.category}
                />
            }
          </td>
        }
    </tr>
  )
}