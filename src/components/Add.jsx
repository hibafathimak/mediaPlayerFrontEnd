import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';

const Add = ({setVideoUploadResponse}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [videoDetails,setVideoDetails]=useState({
    caption:"",url:"",link:""
  })

  const getEmbedLink=(youtubeLink)=>{
    if(youtubeLink.includes("v=")){
      const videoId=youtubeLink.split("v=")[1].slice(0,11)
      // console.log(videoId);
      setVideoDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
      setInvalidLink(false)


    }else{
      setInvalidLink(true)
      // console.log("invalid youtube link");
      setVideoDetails({...videoDetails,link:""})

    }
  }

  const [invalidLink,setInvalidLink]=useState(false)

  const handleUploadVideo= async()=>{
    const {caption,url,link}= videoDetails
    if(caption && url && link){
      // alert("api call")
     try{
      const response = await uploadVideoAPI(videoDetails)
      // console.log(response);
      if(response.status>=200 && response.status<300){
        handleClose()
        alert("Video Uploaded Successfully")
        setVideoDetails({...videoDetails,caption:"",url:"",link:""})
        setVideoUploadResponse(response.data)
      }
     }catch(error){
      console.log(error);
     }

    }else{
      alert("Please Fill The Form Completely !!")
    }
  }

// console.log(videoDetails);

  return (
    <>
      <div className="d-flex align-item-center">
        <h4 className='mt-2'>Upload New Video</h4>
        <button onClick={handleShow} className='btn btn-info rounded-circle ms-4 fs-5 fw-bolder py-2 px-4'>+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel controlId="floatingInputCaption" label="Video Caption" className="mb-3">
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputUrl" label="Image Url" className="mb-3">
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,url:e.target.value})} type="text" placeholder="Image Url" />
            </FloatingLabel><FloatingLabel controlId="floatingInputLink" label="Youtube Link" >
              <Form.Control onChange={e=>getEmbedLink(e.target.value)} type="text" placeholder="Youtube Link" />
            </FloatingLabel>
            {invalidLink && <div className="mt-3 text-danger fw-bolder">* Invalid Youtube Link</div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add