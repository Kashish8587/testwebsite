import React from 'react'
import upperlogo from "../assest/images/upperlogo.png";
import downlogo from "../assest/images/downlogo.png";

function Footer() {
  return (
    <div className='footer_div p-3'>
        <h2 className='text-white'>Most Searched on Flat and Flatmates</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet arcu elementum feugiat et arcu facilisis. Aliquam sed lorem a, varius mi, phasellus ornare. Gravida ullamcorper pretium ac sed lectus facilisi. Risus, sed egestas velit senectus netus sed leo. Nunc in feugiat sollicitudin interdum sed netus sit nisi eleifend. Enim tincidunt sociis tortor ac et tellus. Fusce sodales est mauris consectetur sit. Et gravida urna dignissim commodo. Lacus venenatis, massa ac vulputate quis diam.
Sed a massa tellus suspendisse laoreet. Scelerisque sit vel egestas cursus ultricies sed. Penatibus ipsum volutpat, enim, cras vulputate id mattis faucibus penatibus. Id enim ut cursus id viverra ut. At malesuada sed venenatis risus amet cras. Posuere scelerisque pharetra nibh purus. Tortor, gravida sollicitudin pretium consectetur non, consectetur euismod dolor nunc. Dictum lorem senectus sollicitudin tristique. Cursus cursus dolor ante varius. Feugiat dictum facilisis tortor ornare id. Tempus, viverra sed sit tempor ullamcorper odio tincidunt. Sed est tincidunt auctor sed suscipit purus, eros arcu.
Vitae urna sollicitudin urna mattis leo posuere tempor quis. Odio gravida tincidunt scelerisque dictum faucibus elementum ullamcorper ut. Nisl elit lectus cursus accumsan sollicitudin. Pellentesque orci venenatis ac imperdiet elit. Massa adipiscing fames commodo massa nibh. Pellentesque quis quam tincidunt dictum quis ultricies magna. Magna ac sit tincidunt commodo ac.
Interdum vel volutpat aenean sed in dictum. In a ornare imperdiet at est at ut. Magna rhoncus ac id ultrices ut volutpat egestas. Faucibus nisi tellus ac gravida lacus, nunc morbi mauris semper. Quam sed auctor interdum tincidunt tristique quam nulla. Sagittis, ut eu quam aliquam. Dui sit non dictum facilisis. Dolor adipiscing consequat aliquam sed tellus. Gravida pellentesque pellentesque facilisis pretium, odio. Sit molestie ullamcorper sit ac nunc, nam nisi congue aliquam. Curabitur imperdiet mauris mattis erat elementum fermentum, odio fusce. Leo egestas ut velit fames. Cras sed turpis nunc lectus eget interdum praesent amet odio. Rutrum dictum lorem vestibulum nullam sagittis, nam et leo.
Sit lectus vestibulum amet gravida et aliquam nunc. Vitae maecenas dui id fringilla. Aenean et elit risus quis tempus, semper hendrerit. Et nunc, pretium augue fames dictum phasellus vulputate. Nibh sed curabitur tempor nunc aliquam dictum. Morbi pellentesque adipiscing enim, scelerisque. Scelerisque interdum neque laoreet.</p>
<hr />
<div className="row">
    <div className="col d-flex flex-column justify-content-center align-items-center">
    <div className="upper_logo">
            <img
              className="img-fluid"
              src={upperlogo}
              style={{ width: "25px", height: "25px" }}
              alt=""
            />
          </div>
          <div className="lowernav_logo">
            <img
              className="img-fluid"
              style={{ width: "25px", height: "25px" }}
              src={downlogo}
              alt=""
            />
          </div>
    </div>
    <div className="col d-flex flex-column justify-content-center align-items-center">
        <h3>Flat and Flatmates</h3>
        <p>@ Copyright FlatandFlatmates</p>
    </div>
  
    <div className="col d-flex flex-column justify-content-center align-items-center">
       <h3>Company</h3>
       <p>About Us</p>
       <p>Contact Us</p>
       <p>Careers</p>
       <p>Report a Problem</p>
    </div>
    <div className="col d-flex flex-column justify-content-center align-items-center">
       <h3>Policies</h3>
       <p>Privacy Policy</p>
       <p>Terms & Conditions</p>
       <p>Lorem</p>
       <p>Ipsum</p>
    </div>
    <div className="col d-flex flex-column justify-content-center align-items-center">
       <h3>Help</h3>
       <p>List your property</p>
       <p>Talk to our Expert</p>
       <p>Lorem</p>
       <p>Ipsum</p>
    </div>
</div>
<hr />
<div className="row">
    <div className="col d-flex  justify-content-around align-items-center">
        <h6>Mail Us : help@flatandflatmates.com</h6>

        <h6>Address : A 50, Gurugram, Haryana.</h6>
    </div>
</div>
    </div>
  )
}

export default Footer