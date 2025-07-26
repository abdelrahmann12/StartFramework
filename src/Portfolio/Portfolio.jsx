
import React from 'react'
import Line from '../Line/Line';
import "./Portfolio.css"
import port1 from "../assets/poert1.png"
import port2 from "../assets/port2.png"
import port3 from "../assets/port3.png"

export default function Portfolio() {
  return (
    <div className='port'>
      <div className="head">
        <h2>PORTFOLIO COMPONENT</h2>
        {/*  */}
        <div className="design mb-2">
        <div className="line"></div>
        <i class="fa-solid fa-star"></i>
        <div className="line"></div>
      </div>
        {/*  */}
      </div>
      <div className="gallery container">
        <div className=' row g-4'>
        <div className="img col-md-4">
            <div className="layer">
                <i class="fa-solid fa-plus"></i>
            </div>
            <img src={port1} alt="" />
        </div>
        <div className="img col-md-4">
            <div className="layer">
                <i class="fa-solid fa-plus"></i>
            </div>
            <img src={port2} alt="" />
        </div>
        <div className="img col-md-4">
            <div className="layer">
                <i class="fa-solid fa-plus"></i>
            </div>
            <img src={port3} alt="" />
        </div>
        <div className="img col-md-4">
            <div className="layer">
                <i class="fa-solid fa-plus"></i>
            </div>
            <img src={port1} alt="" />
        </div>
        <div className="img col-md-4">
            <div className="layer">
                <i class="fa-solid fa-plus"></i>
            </div>
            <img src={port2} alt="" />
        </div>
        <div className="img col-md-4">
            <div className="layer">
                <i class="fa-solid fa-plus"></i>
            </div>
            <img src={port3} alt="" />
        </div>

        </div>
        
      </div>
    </div>
  )
}
