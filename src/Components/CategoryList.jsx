import React, { useState, useEffect } from 'react';
import AddCategory from './AddCategory';
import { getCategoryListApi, delCategoryListApi, addVideoCategoryApi } from '../Services/allApi';
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';

function CategoryList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    //dragging
    const dragOverHandler = (e) => {
        e.preventDefault()
        console.log("Dragging Over!")
    }
    //drop
    const dropEventHaandler = async (e, cat) => {
        console.log("dropped")
        //console.log(e.dataTransfer.getData('video'))
        const video = JSON.parse(e.dataTransfer.getData('video'))//pushinng data with all elements in obj
        cat.videos.push(video)
        //console.log(cat)
        const result = await addVideoCategoryApi(cat.id, cat)
        console.log(result)
        if (result.status == 200) {
            toast.success("Video Added Successfully!")
            getData()
        }
        else {
            toast.warning("Video Adding Failed")
        }
    }
    //category Delete
    const removeList = async (id) => {
        const result = await delCategoryListApi(id);
        console.log(result);
        if (result.status === 200) {
            getData()
        }
    };
    //add categ without refresh
    const handleAddCategory = () => {
        getData()
    }
    //getategory
    const getData = async () => {
        const result = await getCategoryListApi();
        console.log(result);
        if (result.status === 200) {
            setList(result.data);
        }
    };

    return (
        <>
            <div className='w-100'>
                
                <h3 className='my-5 mb-3 text-light'>Category List</h3>
                <AddCategory added={handleAddCategory} />
                <div className="d-flex flex-column mt-4 p-2 border border-2 border-light">
                    {list.length > 0 ? (
                        list?.map((item) => (
                            <div key={item.id} className="w-90 border m-2 shadow p-3 rounded" onDragOver={(e) => dragOverHandler(e)} onDrop={(e) => dropEventHaandler(e, item)}>
                                <div className='d-flex justify-content-between'>
                                    <h4 style={{ color: "white" }}>{item.name}</h4>
                                    <button className="btn">
                                        <i className="fa-solid fa-trash fa-xl" onClick={() => { removeList(item.id) }}></i>
                                    </button>
                                </div>
                                {
                                    item.videos.length>0 &&
                                    item.videos.map(vid=>(
                                        <VideoCard video={vid} cat={true}/>
                                    ))
                                }
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-muted">No categories available</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default CategoryList;