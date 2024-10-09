import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addCategoryAPI, getCategoryAPI, getSingleVideoAPI, removeCategoryAPI, removeVdoAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

const Category = ({setRemoveVdoResponseFromCategory,removeVdoResponseFromView}) => {
  const [allCategories,setAllCategories]=useState([])
  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName]=useState("")

  useEffect(()=>{
    getAllCategory()
  },[removeVdoResponseFromView])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory =async ()=>{
    if(categoryName){
      const categoryDetails ={categoryName,allVdos:[]}
      await addCategoryAPI(categoryDetails)
      handleClose()
      setCategoryName("")
      getAllCategory()

    }else{
      alert("please fill the form")
    }
  }

  const getAllCategory=async()=>{
    const response = await getCategoryAPI()
    setAllCategories(response.data)
  }
  // console.log(allCategories);
  
  const deleteCategory=async (id)=>{
await removeCategoryAPI(id)
getAllCategory()
  }

 const videoDropOverCategory=async (e,categoryId)=>{
  const videoId=e.dataTransfer.getData("id")
  // console.log(categoryId,videoId);
  const {data}=await getSingleVideoAPI(videoId)
  // console.log(data);
  const selectedCategory=allCategories?.find(item=>item.id==categoryId)
  selectedCategory.allVdos.push(data)
  console.log(selectedCategory);
  // since the data is lost when page is refreshed we dupdate selected category in all category
  await updateCategoryAPI(categoryId,selectedCategory)
  //remove vdo from all vdos
  const response = await removeVdoAPI(videoId)
  //pass response to view component
  setRemoveVdoResponseFromCategory(response)
  //get all category after updation
  getAllCategory()
  
 }
 const dragOverCategory=(e)=>{
  e.preventDefault()
 }

 const categoryVideoDragStart =(e,categoryId,video)=>{
  console.log(`categoryId ${categoryId} video id : ${video.id}`);
  let dataShare={categoryId,video}
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  
 }

  return (
    <>
    <div className='d-flex justify-content-around'>
      <h3>All Category</h3>
      <button onClick={handleShow} className='btn btn-info rounded-circle ms-4 fs-5 fw-bolder py-2 px-4'>+</button>
    </div>
    <div className="container-fluid mt-3">
     {
      allCategories?.length>0 ?

      allCategories?.map(item=>(
        <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoDropOverCategory(e,item?.id)} className="border rounded p-3 mb-2">
        <div className="d-flex justify-content-between">
          <h5>{item?.categoryName}</h5>
          <button onClick={()=>deleteCategory(item?.id)} className='btn'><i className="fa-solid fa-trash text-info"></i></button>
        </div>
        
          <div className="row mt-2">
            {
              item?.allVdos?.length>0 && 
              item?.allVdos?.map(video=>(
                <div draggable={true} onDragStart={e=>categoryVideoDragStart(e,item?.id,video)} key={item?.id} className="col-md-4">
                  <VideoCard displayData={video} insideCategory={true}/>
                </div>
              ))
            }
          </div>
        
      </div>
      ))

      :
      <div className="text-danger fw-bolder">No Categories Yet!!</div>
     }
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingInputCategory" label="Category Name" >
              <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
            </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category