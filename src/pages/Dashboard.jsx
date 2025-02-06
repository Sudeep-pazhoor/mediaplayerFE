import React from 'react'
import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import AddVideo from '../Components/AddVideo'
import VideoCard from '../Components/VideoCard'
import CategoryList from '../Components/CategoryList'
import { Link } from 'react-router-dom'
import { getVideolistApi } from '../Services/allApi'


function Dashboard() {

  const [videos, setVideos] = useState([])
  const [addResponse, setAddResponse] = useState("")
  const [delResponse,setDelResponse]=useState("")

  useEffect(() => {
    getData()
  }, [addResponse,delResponse]) 

  const getData = async () => {
    const result = await getVideolistApi()
    if (result.status == 200) {
      console.log(result.data)
      setVideos(result.data)
    }
  }
  return (
    <>
      <div className="container-fluid " style={{ height: '250vh', backgroundColor: 'black' }}>
        <div className='d-flex justify-content-between'>
          <h2 style={{ color: "white" }}>All Videos</h2>
          <Link className='text-primary' to={'/his'}>Watch History</Link>
          <Link className='btn btn-danger' to={'/log'}>Logout</Link>
         
        </div>
        <Row>
          <Col lg={1}>
            <AddVideo address={setAddResponse}/>
          </Col>
          <Col lg={7}>
            {
              videos.length > 0 ?
                <div className="d-flex justify-content-even flex-wrap p-2" style={{ backgroundColor: "black" }}>
                  {
                    videos.map(item => (
                      <VideoCard video={item} del={setDelResponse}/>
                    ))
                  }
                </div>
                :
                <h3>No Videos Found</h3>
            }
          </Col>

          <Col lg={4}>
            <CategoryList />
          </Col>
        </Row>
      </div >
    </>
  )
}

export default Dashboard