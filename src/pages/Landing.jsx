import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className='container-fluid p-5' style={{ backgroundColor: 'black' }}>
        <Row style={{ height: '65vh' }}>
          <Col className='d-flex justify-content-center flex-column p-3'>
            <h1 className='text-success'>Retro_mp4</h1>
            <p style={{ textAlign: 'justify' ,}} className='text-light'>Retro_mp4 is a dynamic platform designed to bring you the latest and most engaging video content and playlists. Curated and fully managed by @sudeep_pazhoor,
              it ensures a premium viewing experience with a commitment to originality and creativity. With all copyrights exclusively owned, AppapZ_mp4 is a trusted hub for updated content, offering a perfect blend of entertainment and innovation.
              Dive into a world of captivating videos crafted to keep you inspired and entertained!
            </p>
            <Link className='btn btn-success text-light bg-success' to={'/log'}>Login</Link>
          </Col>
          <Col className='d-flex justify-content-center p-2'>
            <img src="https://i.gifer.com/C3vT.gif" className='img-fluid' alt="image" />
          </Col>
        </Row>

        <div className='container p-3'>
          <h4 className='my-3 text-success'>Features</h4>
          <div className='d-flex justify-content-between'>

            <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white' ,border: "2px solid white"}}>
              <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/fb/d6/36/fbd636d695a9c16d1a24cb850241f943.gif" />
              <Card.Body>
                <Card.Title className='text-success'>Upload Youtube Videos</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  Easily upload and manage your YouTube videos on Retro_mp4 for a smooth viewing experience. Keep your content fresh and engaging with seamless updates!
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white' ,border: "2px solid white"}}>
              <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/d5/72/87/d5728737c40e25caeb76281213d26943.gif" />
              <Card.Body>
                <Card.Title className='text-success'>Youtube Links</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  Easily upload and manage your YouTube videos on Retro_mp4 for a smooth viewing experience. Keep your content fresh and engaging with seamless updates!
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white',border: "2px solid white" }}>
              <Card.Img variant="top" height={'200px'} src="https://media.newyorker.com/photos/6761f6fcabcd9b87fd8b0e13/master/w_2560%2Cc_limit/r45058web.gif" />
              <Card.Body>
                <Card.Title className='text-success'>Watch Histroy</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  Track your recently watched videos effortlessly and resume playback anytime on Retro_mp4.Stay updated with your viewing trends #retro_mp4 #enjoy!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className='container-fluid-success border p-5 bg-black text-light my-5'>
          <Row>
            <Col className='d-flex flex-column justify-content-center'>
              <h3>Simple, Easy and Secure</h3>
              <p style={{ textAlign: 'justify' }}>
                Experience a hassle-free platform designed for smooth navigation and effortless content management. Enjoy seamless access to your favorite videos with a user-friendly interface. Your data and viewing history are protected with top-notch security measures for a safe experience. </p>
            </Col>
            <Col>
              <img src="https://seceon.com/wp-content/uploads/2024/09/atd.gif" className='img-fluid' alt="simple" style={{ width: '650px', height: '400px' }} />
            </Col>
          </Row>
        </div>

        <div className='container-fluid p-5 text-light '>
          <Row>
            <Col lg={6} className='d-flex flex-column justify-content-center'>
              <h2>Checkout our New Updates !</h2>
              <p style={{ textAlign: 'justify' }}>
                Stay ahead with the latest features and enhancements on Retro_mp4 for a smoother experience. Enjoy improved performance, fresh content, and exciting new tools. Keep exploring to make the most of our latest updates!
              </p>
            </Col>
            <Col lg={6} className='flex-column container-fluid p-5'>
              <iframe width="100%" height="315"
                src="https://www.youtube.com/embed/xaeIuEY-jNo?autoplay=1&controls=0&start=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                onmouseover="this.setAttribute('controls', '1');"
                onmouseleave="this.removeAttribute('controls');">
              </iframe>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Landing