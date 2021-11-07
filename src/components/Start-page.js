import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="page-content">
        <div className="title-image"></div>
        <div className="btn-box">
        <Link to='/levelone'><button className="start-btn"></button></Link>
        </div>
        <div className='bottom-box'>
         <p className='bottom-text'>prod. by Anton Nalivayko</p>

        </div>
      </div>
    </div>
  );
};

export default StartPage;
