import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home">
            <i className='fa-solid fa-cloud-arrow-up fa-xl text-dark'></i>
            {' '}
            <b className='text-light'>Retro_mp4</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header