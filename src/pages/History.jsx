import React from 'react'
import { deleteHistoryApi, getHistoryApi } from '../Services/allApi'
import { useState, useEffect } from 'react'

function History() {

  useEffect(() => {
    getHistory()
  }, [])
  const [history, setHistory] = useState([])

  const getHistory = async () => {
    const result = await getHistoryApi();
    console.log(result);
    if (result.status === 200) {
      setHistory(result.data);
    }
    else {
      console.log(result)
    }
  };

   const removeHis=async(id)=>{
      const result=await deleteHistoryApi(id)
      console.log(result)
      if(result.status==200){
        getHistory()
      }
      else{
        console.log(result)
      }
    }

  return (
    <>
      <div className='container-fluid' style={{height:"580vh",  backgroundColor: "black" }}>
        <h2 style={{ color: "white" }}>Watch History</h2>
        {
          history.length > 0 ?
            <table className='table table-borderd my-5 text-light' style={{ backgroundColor: "black" }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Poster</th>
                  <th>Date And Time</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {history?.map(item=>(
                <tr>
                  <td>{item.videoid}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.image} height={'200px'} alt="" />
                  </td>
                  <td>{item.datetime}</td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>{removeHis(item.id)}}>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            :
            <h1 className='text-center text-danger'>No History Found</h1>
        }
      </div>
    </>
  )
}

export default History