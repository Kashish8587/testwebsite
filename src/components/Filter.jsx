import React from "react";

function Filter() {
  return (
    <div className="container filter_container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <button className="btn btn-otline-primary">Full House</button>
          <button className="btn btn-otline-primary">PG/Hostel</button>
          <button className="btn btn-otline-primary">Flatmates</button>
          <button
            className="dropdown btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
           
          </ul>
          <div className="input-group flex-nowrap">
  
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div className="input-group flex-nowrap">
  
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
        </div>
      </div>
      <div className="row " >
        <div className="col d-flex">
         
            <button
              className="btn btm-sm dropdown btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
             
            </ul>
         
            <div className="input-group flex-nowrap">
  
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<button className="btn btn-success">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
