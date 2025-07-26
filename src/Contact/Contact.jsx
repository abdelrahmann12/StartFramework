import React from 'react'
import "./Contact .css"

export default function Contact() {
  return (
    
      <div className='con'>
      <div className="header">
        <h2 className=''>conatct section</h2>  
      </div>
      <div className="design mb-2">
              <div className="line"></div>
              <i class="fa-solid fa-star"></i>
              <div className="line"></div>
      </div>


      <form className=' container'  action="" onSubmit={(e)=>{
        e.defaultPrevented();
      }}>
        <label htmlFor=""></label>
        <input className=' form-control' type="text"  placeholder='userName'/>

        <label htmlFor=""></label>
        <input  className=' form-control' type="text"  placeholder='userAge'/>

        <label htmlFor="" ></label>
        <input  className=' form-control' type="text" placeholder="userEmail" />

        <label htmlFor=""></label>
        <input  className=' form-control' type="text" placeholder='userPassword' />

        <div className="btn">
            <button>send Message</button>
        </div>

      </form>
      </div>
   
  )
}
