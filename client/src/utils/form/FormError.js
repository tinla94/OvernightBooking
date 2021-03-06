import React from 'react';

export function FormError(props) {
  const errors = props.errors;

  return (
    errors.length > 0 &&
      <div className='text-danger'>
        {errors.map((error, index) => <p key={index}> {error.detail} </p>)}
      </div>
  )
}
