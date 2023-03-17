import React from 'react'
import { ReactDOM } from 'react'
import Button from './Button'

//The below items are imported to bring in specific test functions. First are some tools that allow for shallow rendering
//tests and cleanup of data after each test. Second are tools actually used to make the tests function.
import {screen, render, cleanup} from '@testing-library/react'
import { createRoot } from 'react-dom/client'
import '@testing-library/jest-dom/extend-expect'
//npm install react-test-renderer -- gives us rendering functionality for tests
import renderer from 'react-test-renderer'
import EndToEnd from '../EndToEnd'
import ShallowRender from '../ShallowRender'

//the below function will clean up the data after each test is run
afterEach(cleanup)

//each test below will begin with it('string name of test', function to perform)
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

    //When this test runs it creates a tree that will cause a folder called __snapshots__ for a file called Button.test.js.snap
    //It will save what renders in that snapshot file and each snapshot to see the differences.
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