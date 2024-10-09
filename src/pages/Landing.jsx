import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/music.jpg'
import { Card } from 'react-bootstrap'
import img1 from '../assets/images1.jpeg'
import img2 from '../assets/image2.jpeg'
import img3 from '../assets/image3.webp'


const Landing = () => {
  return (
    <div className='container' style={{ paddingTop: '70px' }}>

      <div className="row align-items-center">
        <div className="col-lg-5 mt-5">
          <h3>Welcome to <span className='text-info'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className='my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores cumque id sint velit temporibus, voluptas ipsum fuga atque cum corrupti minima sapiente quis quaerat in placeat consequuntur? Tempora, necessitatibus sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet hic minima dolores beatae quas optio, praesentium mollitia nobis vel recusandae ullam modi odit sint saepe dicta magnam consequuntur! Dolorum, possimus!</p>
          <Link to={'/home'} className='btn btn-info mt-4'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='ms-4 ' src={LandingImg} alt='' />
        </div>

      </div>

      <div className="my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img variant="top" height={'250px'} src={img1} />
      <Card.Body>
        <Card.Title>Managing Videos </Card.Title>
        <Card.Text>
          User can upload, view and remove videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img variant="top" height={'250px'}  src={img2} />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          User can categorise the videos by drag and drop features.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img variant="top" height={'250px'}  src={img3} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          User can manage the watch history of all videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>

      <div className="my-5 row align-items center border rounded p-5">
<div className="col-lg-5">
  <h3 className='text-info'>Simple , Fast and Powerful</h3>
  <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse rerum, repudiandae corporis accusantium .</p>
  <p style={{textAlign:'justify'}}> <span className='fs-5'>Categorise Videos : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse rerum, repudiandae corporis accusantium .</p>
  <p style={{textAlign:'justify'}}> <span className='fs-5'>Manage History : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse rerum, repudiandae corporis accusantium .</p>
</div>
<div className="col"></div>
<div className="col-lg-6">
<iframe width="497" height="360" src="https://www.youtube.com/embed/e1BHIY9p2WU" title="Eyy Banane - Video  | Vaazha | Vipin Das | Anand Menen | Electronic Kili |Siju Sunny |Joemon Jyothir"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
      </div>

    </div>
  )
}

export default Landing