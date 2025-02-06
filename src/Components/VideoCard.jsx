import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi, addHistoryApi } from '../Services/allApi';

function VideoCard({ video, del, cat }) {
  const [show, setShow] = useState(false);

  const removeVideo = async (id) => {
    const result = await deleteVideoApi(id)
    console.log(result)
    if (result.status == 200) {
      del(result)
    }
  }


  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true)
    const data = {
      videoid: video.id,
      title: video.title,
      image: video.image,
      url: video.url,
      datetime: new Date()
    }

    const result = await addHistoryApi(data)
    console.log(result)
  }

  //dragging

  const dragEventHandler = (e) => {
    console.log(video.title)
    console.log("Dragging...")
    e.dataTransfer.setData("video", JSON.stringify(video))
  }
  return (
    <>
      <Card className='d-flex justify-content-center flex-column m-5' style={{ width: '17rem', backgroundColor: "black", color: "white", border: "2px solid white" }} onDragStart={(e) => { dragEventHandler(e) }} draggable >
        <Card.Img onClick={handleShow} variant="top" src={video.image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{video.title}</Card.Title>
          {
              !cat &&
            <Button variant="" onClick={() => { removeVideo(video.id) }}>
              <i className="fa-solid fa-trash text-danger"></i>
            </Button>
          }

        </Card.Body>
      </Card>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: "black" }}>
          <Modal.Title style={{ color: "white" }}>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" }}>
          <iframe width="100%" height="315" src={`${video.videoUrl}&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black" }}>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard