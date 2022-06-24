import React, { useEffect, useState } from "react";
import axios from "axios";

function WhyChoose() {
  const [whyChoose, setWhyChoose] = useState([]);
  useEffect(() => {
    getWhyChoose();
  }, []);

  const getWhyChoose = async () => {
    let resp = await axios.get(
      "https://admin.flatandflatmates.com/home/why_choose_us/"
    );
    if (resp.status === 200 && resp.data) {
      setWhyChoose(resp.data.data);
    }
  };
  return (
    <div className="chooseContainer">
      <h1 className="text-center text-white p-3">Why Choose Us?</h1>
      <div className="row">
        {whyChoose.map((item, index) => (
          <div  key={index} className="col d-flex justify-content-center align-items-center flex-column p-3">
            <img className="img-fluid p-3" style={{width:"100px",height:"100px"}} src={item.image} alt="" />
            <p className="text-white text-center p-2">{item.title}</p>
            <span className="p-3" style={{fontSize:"10px"}}>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChoose;
