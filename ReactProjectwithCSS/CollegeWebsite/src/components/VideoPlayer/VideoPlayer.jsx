import React, { useRef } from 'react'
import video from "../../assets/video.mp4"
import "./VideoPlayer.css"
function VideoPlayer({setPlayState,playState}) {
const closePlayer=(e)=>{
    if(e.target=== player.current){
        setPlayState(false)
    }
}
    const player=useRef(null)
  return (
    <div className={`Video-player ${playState?'':'hide'} `} ref={player} onClick={closePlayer} >
        <video src={video} autoPlay muted controls> </video>
    </div>

  )
}

export default VideoPlayer