
import * as Yup from 'yup'

export const catSchema = Yup.object().shape({
    categoryName: Yup.string().max(25, 'Max 25 characters').required('Required'),
    categoryDescription: Yup.string().max(100, 'Max 100 characters')
})

export const todoSchema = Yup.object().shape({
    name: Yup.string().max(100, 'Max 100 characters').required(),
    description: Yup.string().max(50, 'Max 50 characters'),
    url: Yup.string().max(75, 'Max 75 characters').required(),
    linkText: Yup.string().max(25, 'Max 25 characters').required(),
    categoryId: Yup.number().required()
})