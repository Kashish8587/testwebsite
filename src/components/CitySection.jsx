import axios from "axios";
import React, { useEffect, useState } from "react";

function CitySection() {
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState({
    name: "",
    description: "",
    image: "",
  });
  const listing = ["Total Listing", "New Listing", "Searches", "Featured"];

  useEffect(() => {
    getCity();
  }, []);

  const getSelectedCity = (cityName) => {
    const selected = city.find((item) => item.name == cityName);
    setSelectedCity({
      name: selected.name,
      description: selected.description,
      image: selected.image,
    });
  };

  const getCity = async () => {
    let resp = await axios.get(
      "https://admin.flatandflatmates.com/home/city_description/"
    );
    if (resp.status === 200) {
      setCity(resp.data.data);
    }
  };

  const handleCityClick = async (cityName) => {
    getSelectedCity(cityName);
  };

  return (
    <div className="p-5">
      <div className="row">
       
          {city.map((item, index) => {
            return (
              <div  key={index} className="col d-flex justify-content-center align-items-center flex-column p-3 city_names">
                <img 
                
                  className="img-fluid"
                  style={{ width: "100px", height: "100px", marginLeft: "3px" }}
                  src={item.image}
                  onClick={() => handleCityClick(item.name)}
                  alt=""
                />
                <div className="p-3">{item.name}</div>
                </div>

            );
          })}
      </div>
      {selectedCity.name && (
        <div className="row p-3 bg-white mt-4">
          <div className="col d-flex justify-content-center align-items-center" >
            <img src={selectedCity.image} alt="" />
          </div>
          <div className="col">
            <div className="row ">
              <div className="col d-flex justify-content-between p-3">
                <h3>{selectedCity.name}</h3>
                <button className="btn btn-primary">Join Our Facebook Group</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{selectedCity.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row bg-white mt-4">
        
          {listing.map((item, index) => {
            return (
              <div
                key={index}
                className="col d-flex p-4 justify-content-center align-items-center"
              >
                <span className="me-2" style={{ fontSize: "25px" }}>
                  250+
                </span>
                <span style={{ fontSize: "15px" }}>{`${item}`}</span>
              </div>
            );
          })}
     
      </div>
    </div>
  );
}

export default CitySection;
