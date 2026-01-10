import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='px-5 flex gap-2'>
      <Button name={'All'} />
      <Button name={'Shorts'} />
    </div>
  )
}

export default ButtonList