import axios from "axios";
import React, { useEffect, useState } from "react";
import vector from "../assest/images/Vector.png";

function Testimonials() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getTestimonials();
  }, []);
  const getTestimonials = async () => {
    let resp = await axios.get(
      " https://admin.flatandflatmates.com/home/testimonial/"
    );
    if (resp.status === 200) {
      setData(resp.data.data);
    }
  };

  return (
    <div className="testimonial_Container ">
      <h1 className="text-center p-3 mb-3">Testimonials</h1>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col " >
            <div className="card position-relative">
  <div className="card-body " style={index==1?{background:"#F38630"}:{background:"#FFFFFF"}}>
  <img src={vector} alt="" className="img-fluid" style={{width:"40px",height:"40px",background:"#C4C4C499"}}/>
    <p className="card-text">{item.text}</p>
    <div className="position-absolute card_img_div">

<img src={item.image} className="card_img img-fluid" alt="..."/>
  <p className="card-text"><small className="text-muted">{item.title}</small></p>
  </div>
  </div>
 
</div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
