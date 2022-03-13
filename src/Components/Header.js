import React from 'react'
import {Container,Navbar} from 'react-bootstrap'

function Header() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
        <Container>
            <Navbar.Brand href="#">Food Recipe</Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header
