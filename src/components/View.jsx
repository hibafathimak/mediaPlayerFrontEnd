import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI, uploadVideoAPI } from '../services/allAPI'

const View = ({videoUploadResponse,removeVdoResponseFromCategory,setRemoveVdoResponseFromView}) => {

  const [allVideos,setAllVideos]=useState([])
  const [dltVdoResponse,setDltVdoResponse]=useState("")


  useEffect(()=>{getAllVideos()},[videoUploadResponse,dltVdoResponse,removeVdoResponseFromCategory])

  const getAllVideos = async()=>{
    try{
    const response = await getAllVideoAPI()
    // console.log(response);
    setAllVideos(response.data)
  }catch(error){
    console.log(error);
  }
  }
  // console.log(allVideos);
  
const dragOverView=(e)=>{
  e.preventDefault()
}
const categoryVideoDrop=async(e)=>{
  const {categoryId,video}=JSON.parse(e.dataTransfer.getData("dataShare"))  
  // console.log(`video id ${video.id} from category id ${categoryId}`);
  //remove video from category
  //get category details from where we have to remove c video
  const {data} = await getSingleCategoryAPI(categoryId)
//update category after removing the video
const updateAllVideos =data?.allVdos?.filter(item=>item?.id!=video.id)
const updateCategoryDetails ={id:categoryId,categoryName:data.categoryName,allVdos:updateAllVideos}
const response = await updateCategoryAPI(categoryId,updateCategoryDetails)
//pass response to category
setRemoveVdoResponseFromView(response)
//video must be inserted to allvideos - call uploadVideo API
await uploadVideoAPI(video)
getAllVideos()
}

  return (
    <>
  <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDrop(e)}>
   {
    allVideos.length>0?
    allVideos?.map(video=>(
      <Col sm={12} md={6} lg={4}>
      <VideoCard setDltVdoResponse={setDltVdoResponse} displayData={video}/>
      </Col>
    ))
    :
    <div className="text-danger fw-bolder">No videos are Uploaded yet!!</div>
   }
  </Row>
    </>
  )
}

export default View