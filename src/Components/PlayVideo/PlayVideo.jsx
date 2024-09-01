import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.png'


const PlayVideo = ({videoId}) => {

    

    const [apiData , setApiData] = useState(null)

    const fetVideoData = async ()=>{
        const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));

  
        
    }

    useEffect(()=>{
        fetVideoData();

    }, [])

    console.log(apiData);


    
    

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className='play-video-info'>
            <p>{apiData?apiData.statistics.viewCount:"16k"}1525 views &bull ;days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />share</span>
                <span><img src={save} alt="" />125</span>
            </div>
        </div>
        <hr />

        <div className="publisher">
             <img src={jack} alt="" />
             <div>
                <p>Greatstack</p>
                <span>1M subscribers</span>
             </div>
             <button>subscribed</button>
       </div>     

       <div className='vid-description'>
        <p>Channel that makes learn easy</p>
        <p>Subscribe Greatstack to watch more tutorials on web development</p>
        <hr />
        <h4>140 comments</h4>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack nicolas <span>1 day ago </span></h3>
                <p>A globa computer network providing a variety of information and international networks 
                 network providing a variety of information and international network
                </p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>


        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack nicolas <span>1 day ago </span></h3>
                <p>A globa computer network providing a variety of information and international networks 
                 network providing a variety of information and international network
                </p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>




        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack nicolas <span>1 day ago </span></h3>
                <p>A globa computer network providing a variety of information and international networks 
                 network providing a variety of information and international network
                </p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>


       </div>
    </div>
  )
}

export default PlayVideo





