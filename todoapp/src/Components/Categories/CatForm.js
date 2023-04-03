import React, {useContext} from 'react'
import { Formik, Form, Field, useFormik } from 'formik'
import axios from 'axios'
import { catSchema } from "../validationSchema"
import { AuthContext } from '../../Contexts/AuthContext'

export default function CatForm(props) {
    const { currentUser } = useContext(AuthContext)

    const handleSubmit = (values) =>{

        console.log('values from handleSubmit')
        console.log(JSON.stringify(values))

        if(!props.category){

            const response =  axios.post(process.env.REACT_APP_API_URL + '/Categories', values).then(response => {
                props.setShowCreate(false)
                props.getCategories()
               })
              .catch(error => {
                console.error(error);
              })
              .finally(() => {
                //setSubmitting(false);
              });

              console.log(response.data)

        }
        else {
            const catToEdit = {
                categoryId: props.category.categoryId,
                categoryName: values.catName,
                categoryDescription: values.catDesc
            }

            axios.put(process.env.REACT_APP_API_URL + '/Categories/' + props.category.categoryId, catToEdit).then(() => {
                props.setShowEdit(false)
                props.getCategories()
            })
        }
    }

    //const formik = useFormik({initialVlaues: {categoryID: "", catName:"", catDesc:""}, validateOnBlur : true,  onSubmit})

  return (
    <div className='createCategory m-2 text-white text-center'>
        
        <Formik
            initialValues={{
                catName: props.category ? props.category.catName :'', 
                catDesc: props.category ? props.category.catDesc :'' 
            }}
            validationSchema={catSchema}
            onSubmit={values => handleSubmit(values)}
        >
                {({errors, touched}) => (
                    <Form id='catForm' className='row text-center m-auto' >
                        <div className='form-group m-1 p-1'>
                            <Field name='catName' className='form-control' placeholder='Name' />
                            {errors.categoryName && touched.categoryName ?
                                <div className='text-danger'>{errors.catName}</div>
                            : null}
                        </div>
                        <div className='form-group m-1 p-1'>
                            <Field name='catDesc' className='form-control' placeholder='Description' />
                            {errors.categoryDescription && touched.catDesc ?
                                <div className='text-danger'>{errors.catDesc}</div>
                            : null}
                        </div>
                        <div className='form-group m-1'>
                            <button type='submit' className='btn btn-success'>Submit Category to API</button>
                        </div>
                    </Form>
                )}
        </Formik>
    </div>
  )
}