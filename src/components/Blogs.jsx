import React from 'react'
import blog1 from '../assest/images/blog1.png'
import blog2 from '../assest/images/blog2.png'
import blog3 from '../assest/images/blog3.png'

function Blogs() {
    const images=[blog1,blog2,blog3]
  return (
    <>
    <h1 className='text-center p-2'>Blogs</h1>
    <div className="d-flex justify-content-center align-items-center " >

    
    {images.map((item,index)=>(
     <div  key={index} className="card  m-3" style={{width: "18rem"}}>
    <img src={item} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id.s</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
      <a href="#" className="btn btn-outline custom_button">Read More</a>
    </div>
  </div>
    ))}
    </div>
  </>
  )
}

export default Blogs