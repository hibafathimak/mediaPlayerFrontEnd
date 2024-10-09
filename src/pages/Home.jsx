import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

const Home = () => {
  const [removeVdoResponseFromCategory,setRemoveVdoResponseFromCategory]=useState("")

  const [removeVdoResponseFromView,setRemoveVdoResponseFromView]=useState("")

  const[videoUploadResponse,setVideoUploadResponse]=useState("")

  return (
    <div style={{paddingTop:'70px'}}>
      <div className="container mt-3 d-flex justify-content-between">
        <Add setVideoUploadResponse={setVideoUploadResponse}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View setRemoveVdoResponseFromView={setRemoveVdoResponseFromView} removeVdoResponseFromCategory={removeVdoResponseFromCategory} videoUploadResponse={videoUploadResponse}/>
        </div>
        <div className="col-lg-6">
          <Category removeVdoResponseFromView={removeVdoResponseFromView} setRemoveVdoResponseFromCategory={setRemoveVdoResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home