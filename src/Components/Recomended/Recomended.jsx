import React, { useEffect, useState } from 'react'
import './Recomended.css'
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom';


const Recomended = ({categoryId}) => {

  const [apiDta , setApiData] = useState([]);

  const fetchData = async ()=>{
    const relatedVideo_url=`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}` 

     await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
}


useEffect(()=>{
    fetchData();

},[])

  return (
    <div className='recomended'>
        {apiDta.map((item, index)=>{

            return(
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className='vid-info'>
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} views</p>

            </div>
        </Link>

            )

        })}
        
    </div>
  )
}

export default Recomended
