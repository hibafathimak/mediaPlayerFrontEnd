import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVdoAPI, saveHistory } from '../services/allAPI';


const VideoCard = ({ displayData, setDltVdoResponse, insideCategory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //calling saveHistory Details
    //VideoDetails to be stored
    const { caption, link } = displayData
    const today = new Date()
    const timeStamp = today.toLocaleString('en-US', { timeZoneName: 'short' })
    const videoDetails = { caption, link, timeStamp }
    await saveHistory(videoDetails)
  }

  const deleteVdo = async (id) => {
    const result = await removeVdoAPI(id)
    setDltVdoResponse(result)
  }

  const videoDragStart = (e, videoId) => {
    e.dataTransfer.setData("id", videoId)
  }
  return (
    <>
      <Card draggable={true} onDragStart={e => videoDragStart(e, displayData?.id)} style={{ height: '280px', marginTop: '10px' }}>
        <Card.Img onClick={handleShow} height={'200px'} variant="top" src={displayData?.url} />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>
            { !insideCategory &&
            
              <button onClick={() => deleteVdo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-info'></i></button>
            }
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="400" src={`${displayData?.link}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard