import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function News() {
   const [newsList , setNewsList] =useState([])
  useEffect(() => {
    GetNews()
  },[]
  )
  async function GetNews(){
    let {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=1d2c37a4a4874379acb400eb87870c4d`);
    setNewsList(data.articles)
  };
   

  return (
    <div className='row'>
      {
        newsList.map((ele) =>{
          let {title , description , author , urlToImage , publishedAt , url} = ele
          return(
          <div className="col-md-3">
            <div className="item">
              <img className=' w-100' src={urlToImage} alt="" />
              <h5>{title}</h5>
              <p>{description}</p>
              <h6>{author}</h6>
              <h6>{publishedAt}</h6>
              <a href={url} target='-blank'>ReadMore</a>
            </div>
          </div>
          )
        })
      }
    </div>
  )
  
}
