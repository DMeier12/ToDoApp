import React from 'react'
import {Row, Container} from 'react-bootstrap'
import EndToEnd from './EndToEnd'
import ShallowRender from './ShallowRender'

export default function Testing() {
  return (
    <section className='testing'>
        <article className='bg-info p-5 text-center'>
            <h1>Testing in React</h1>
            <a href='https://reactjs.org/docs/testing.html' target='_blank' rel='noreferrer' className='btn btn-dark m-1'>
                Testing Docs
            </a>
        </article>
        <Container>
            <div className='text-center p-2'>
                <h2>Types of React Testing</h2>
                <p>
                    As a React dev, you will undoubtedly be expected to test the components that you are writing to ensure
                    that props are being passed correctly, the component is displaying properly, and that functions are able
                    to return accurate results back to the user.
                </p>
            </div>
            <Row className='mb-4'>
                <EndToEnd test='test' />
                <ShallowRender />
            </Row>
        </Container>
    </section>
  )
}
