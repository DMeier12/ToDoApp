import React, { useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik'
import { todoSchema } from '../validationSchema'
import axios from 'axios'

export default function Todoform(props) {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        axios.get(process.env.REACT_APP_API_URL+ '/Categories').then(response => setCategories(response.data))
    }

    const handleSubmit = (values) => {
        console.log(values)
        if(!props.todos) {
            const todosToCreate = values

            axios.post(process.env.REACT_APP_API_URL + '/Todos', todosToCreate).then(() => {
                props.getTodos()
                props.setShowCreate(false)
            })
        }
        else {
            const todosToEdit = {
                todoId: props.resource.resourceId,
                name: values.name,
                url: values.url,
                linkText: values.linkText,
                description: values.description,
                categoryId: values.categoryId
            }

            axios.put(process.env.REACT_APP_API_URL + '/Todos/' + props.resource.resourceId, todosToEdit).then(() => {
                props.getTodos()
                props.setShowEdit(false)
            })
        }
    }

    useEffect(() => {
        getCategories()
    }, []);

  return (
    <Formik
        initialValues={{
            name: props.todo ? props.todo.name : '',
            url: props.todo ? props.todo.url : '',
            linkText: props.todo ? props.todo.linkText : '',
            description: props.todo ? props.todo.description : '',
            categoryId: props.todo ? props.todo.categoryId : ''
        }}
        validationSchema={todoSchema}
        onSubmit={values => handleSubmit(values)}
    >

        {({errors, touched}) => (
            <Form id='resourceForm'>
                <div className='form-group m-3'>
                    <Field name='name' className='form-control' placeholder='Name' />
                    {errors.name && touched.name ? (
                        <div className='text-danger'>{errors.name}</div>
                    ) : null}
                </div>
                <div className='form-group m-3'>
                    <Field as='select' name='categoryId' className='form-control'>
                        <option value='' disabled>[--Please Choose--]</option>
                        {categories.map(cat =>
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.catName}
                            </option>
                        )}
                    </Field>
                </div>
                <div className='form-group m-3'>
                    <button type='submit' className='btn btn-info m-3'>Submit Todo to API</button>
                </div>
            </Form>
        )}
    </Formik>
  )
}
