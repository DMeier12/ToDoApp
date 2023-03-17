import React from 'react'

export default function Button(props) {
  return (
    <div className='text-center'>
        <button className='btn btn-warning' data-testid='button'>
            {props.label}
        </button>
    </div>
  )
}
