import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='foot'>
      <footer className='container'>
        <div className="location">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <div className="info">
            <span>Clark, MO 65243</span>
          </div>
        </div>

        <div className="web">
          <h2>AROUND THE WEB</h2>
          <ul className="links">
            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href=""><i class="fa-solid fa-earth-americas"></i></a></li>
          </ul>
        </div>

        <div className="freelancer">
          <h2>ABOUT FREELANCER</h2>
          <p>Freelance is a free to use,<br></br> licensed Bootstrap theme created by Route</p>
        </div>


      </footer>
     <div className="bottom-footer">
      Copyright © Your Website 2021
     </div>
    </div>
  )
}
