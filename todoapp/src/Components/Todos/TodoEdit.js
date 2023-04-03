import React, {useContext} from 'react'
import { Modal } from 'react-bootstrap'
import TodoForm from './TodoForm'
import { AuthContext } from '../../Contexts/AuthContext'

export default function TodoEdit(props) {
  const { currentUser } = useContext(AuthContext)

  return (
    <Modal
        show={props.showEdit}
        onHide={() => props.setShowEdit(false)}
    >
        <Modal.Header>
            <h3>Editing {props.todo.name}</h3>
        </Modal.Header>
        <Modal.Body>
            <TodoForm
                todo={props.todo}
                setShowEdit={props.setShowEdit}
                getTodo={props.getTodo} />
        </Modal.Body>
    </Modal>
  )
}
