import React from 'react'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className='text-center'>
    <h1>Bienvenido a <b>Happy Cake</b></h1>
    <h6>El lugar de los pasteles felices</h6>
    <span style={{fontSize: "48px"}}>🎂</span>
  </Container>
  )
}
