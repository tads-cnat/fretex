import React from 'react'
import { Container } from './styles'
import { ReactComponent as Pencil } from '../../../assets/images/pencil.svg'

const Banner = () => {
  return (
    <>
    <Container>
        <button className='editBtn'>
            <Pencil className='editImage'/>
        </button>
    </Container>
    </>
  )
}

export default Banner