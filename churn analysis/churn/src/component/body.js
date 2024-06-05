import React from "react";
import backgroundImage from '../content/image.jpg';
export default function Body() {

  return (
    <>
    
    <div
      className="bg-image d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backdropFilter: 'blur(20px)'
      }}
    >
     <div className="container flex">
      <p className="content-center bg-cyan-500" >enter the following data</p>
      <div>
        <div className="input-group-prepend">
          <span className="input-group-text">credit sccore</span>
        </div>
          <input placeholder='credit score'type="number"/>
      </div>
      <div>
        <input className='' placeholder="Geography"/>
      </div>
     </div>
    </div>
    </>
  );
}
