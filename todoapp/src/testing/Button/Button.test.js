import React from 'react'
import { ReactDOM } from 'react'
import Button from './Button'
import {screen, render, cleanup} from '@testing-library/react'
import { createRoot } from 'react-dom/client'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import EndToEnd from '../EndToEnd'
import ShallowRender from '../ShallowRender'
afterEach(cleanup)

it('Button renders without crashing', () => {
    const div = document.createElement('div') 
    const root = createRoot(div)
    root.render(<Button/>)
})

it('Button renders prop correctly', () => {
    const {getByTestId} = render(<Button label='Submit' />)
    expect(screen.getByTestId('button')).toHaveTextContent('Submit')
})

it('Button matches snapshot', () => {
    const tree = renderer.create(<Button label='Save'/>).toJSON()

    expect(tree).toMatchSnapshot()
})

it('End to End renders props correctly', () => {
    const {getByTestId} = render(<EndToEnd test='test' />)

    expect(screen.getByTestId('paragraph1')).toHaveTextContent('test')
})

it('ShallowRender renders correctly', () => {
    const tree = renderer.create(<ShallowRender />).toJSON()

    expect(tree).toMatchSnapshot()
})