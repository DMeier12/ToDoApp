import React, { useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik'
import { todoSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function Todoform(props) {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        axios.get(`https://localhost:7075/api/Categories`).then(response => setCategories(response.data))
    }

    const handleSubmit = (values) => {
        console.log(values)
        if(!props.todos) {
            const todosToCreate = values

            axios.post(`https://localhost:7075/api/Todos`, todosToCreate).then(() => {
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

            axios.put(`https://localhost:7075/api/Todos/${props.resource.resourceId}`, todosToEdit).then(() => {
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
        validationSchema={todoschema}
        onSubmit={(values) => handleSubmit(values)}
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
                    <Field name='url' className='form-control' placeholder='Url' />
                    {errors.url && touched.url ? (
                        <div className='text-danger'>{errors.url}</div>
                    ) : null}
                </div>
                <div className='form-group m-3'>
                    <Field name='linkText' className='form-control' placeholder='Link Text' />
                    {errors.linkText && touched.linkText ? (
                        <div className='text-danger'>{errors.linkText}</div>
                    ) : null}
                </div>
                <div className='form-group m-3'>
                    <Field name='description' className='form-control' placeholder='Description' />
                    {errors.description && touched.description ? (
                        <div className='text-danger'>{errors.description}</div>
                    ) : null}
                </div>
                <div className='form-group m-3'>
                    <Field as='select' name='categoryId' className='form-control'>
                        <option value='' disabled>[--Please Choose--]</option>
                        {categories.map(cat =>
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.categoryName}
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
