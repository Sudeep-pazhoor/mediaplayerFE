import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addVideoApi } from '../Services/allApi';

function AddVideo({address}) {
    const [show, setShow] = useState(false);
    const [video, setVideo] = useState({
        title: "", videoUrl: "", image: ""
    })

    const handleAdd = async () => {
        const { title, videoUrl, image } = video
        if (!title || !videoUrl || !image) {
            toast.warning("Enter Valid Input")
        }
        else {
            const charset=video.videoUrl.split("v=")
            setVideo({...video,videoUrl:`https://www.youtube.com/embed/${charset[1]}?si=eU4KPvW-CYECjLua`})
            console.log(video)
            const result =await addVideoApi({title,image,videoUrl:`https://www.youtube.com/embed/${charset[1]}?si=eU4KPvW-CYECjLua`})
            console.log(result)
            if(result.status==201){
                toast.success("Video Uploaded Successfully")
                setVideo({title:"", videoUrl:"", image:""})
                handleClose()
                address(result)
            }
            else{
                toast.error("Uploading Failed")
                console.log(result)
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <button className='btn' onClick={handleShow} >
                <i className="btn btn-success fa-solid fa-square-plus text-light"></i>
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='my-2'>
                        <div className='mb-3'>
                            <input type="text" placeholder='Enter Video Title' onChange={(e) => { setVideo({ ...video, title: e.target.value }) }} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Enter Video File Link' onChange={(e) => { setVideo({ ...video, videoUrl: e.target.value }) }} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Enter Image url' onChange={(e) => { setVideo({ ...video, image: e.target.value }) }} className='form-control' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddVideo