import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='container-fluid bg-dark p-3 text-dark 100vh'>
        <Row>
          <Col lg={5}>
            <h4 className='text-light'>Retro_mp4</h4>
            <p style={{ textAlign: 'justify', fontWeight: "500", color: "white" }}>
              Retro MP4 – Bringing you classic and entertaining video playlists for pure nostalgia! Enjoy a curated collection of retro videos, timeless hits, and vintage entertainment. Stay tuned for regular updates and dive into the golden era of media!

              📩 Email: sudeeppazhoor@gmail.com
              📷 Instagram: @sudeep_pazhoor
            </p>
          </Col>
          <Col lg={2}>
            <h4 className='text-light'>Links</h4>
            <p><Link className='text-light' to={'/'}>Landing</Link></p>
            <p><Link className='text-light' to={'/log'}>Login</Link></p>
            <p><Link className='text-light' to={'/reg'}>Register</Link></p>
          </Col>
          <Col lg={5}>
            <h4 className='text-light'> Feedback</h4>
            <textarea name="" placeholder='Enter Feedback' id="" className='form-control'></textarea>
            <button className='btn btn-success mt-3'>Send</button>
          </Col>
        </Row>


        <h2 className='text-center text-light'>Retro_mp4'25 &copy; Copyrights owned</h2>
      </div>
    </>
  )
}

export default Footer