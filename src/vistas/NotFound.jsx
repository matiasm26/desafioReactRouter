import React from 'react'
import pastel from '../img/pastel.png';
import { Container } from 'react-bootstrap';

export default function NotFound() {
  return (
    <>
    <Container className='justify-content-center text-center'>
        <h1>Lo siento, esta página no existe</h1>
        <img src={pastel} alt="Pastel llorando" style={{width:'250px'}}/>

    </Container>
    
    </>
  )
}
