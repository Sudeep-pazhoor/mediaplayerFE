import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addCategoryApi } from '../Services/allApi';

function AddCategory({ added }) {
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState({
        name: "",
        videos: []
    });

    const addCategory = async () => {
        const { name } = category;
        if (!name) {
            toast.warning("Enter Valid Inputs!");
        } else {
            const result = await addCategoryApi(category);
            console.log(result);
            if (result.status === 201) {
                toast.success("Category Added Successfully!");
                handleClose();
                setCategory({ name: "", videos: [] });
                added(); 
            } else {
                toast.error("Something Went Wrong!");
            }
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn btn-success' onClick={handleShow}>Add Category +</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text" placeholder='Enter Playlist' className='form-control' onChange={(e) => { setCategory({ ...category, name: e.target.value }) }} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addCategory}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddCategory;