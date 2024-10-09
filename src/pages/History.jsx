import React, { useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'



const History = () => {

  const [allVideoHistory,setAllVideoHistory]=useState([])

  useEffect(()=>{getHistory()},[])

  const getHistory=async () => {
  try{  
    const response =await getHistoryAPI()
    setAllVideoHistory(response.data)
  }catch(err){
    console.log(err);
  }
  }

  const dltHistory =async(id)=>{
    await removeHistoryAPI(id)
    getHistory()
  }

  console.log(allVideoHistory);
  

  return (
    <div className='container' style={{paddingTop:'100px'}}>
      <div className="d-flex justify-content-between mb-5">
    <h3>Watch History</h3>
    <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className="table my-5 shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th>⁝</th>
          </tr>
        </thead>
        <tbody>
         {
          allVideoHistory?.length>0?
          allVideoHistory?.map((item,index)=>(
            <tr key={item?.id}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.link} target='_blank'>{item?.link}</a></td>
            <td style={{fontFamily:'sans-serif'}}>{item?.timeStamp}</td>
            <td><button onClick={()=>dltHistory(item?.id)} className='btn'><i className="fa-solid fa-trash text-info"></i></button></td>
          </tr>
          ))
          :
          <div className="text-danger fw-bolder">No Videos are Watched Yet</div>
         }
        </tbody>
      </table>
    </div>
  )
}
export default History