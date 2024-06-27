// import React, { useReducer, useRef } from 'react'
// import './video.css'
// import {assets} from '../../assets/index'
// const VideoPlayer = ({playState , setPlayState}) => { 

//   const player = useRef();
 
//   const closePlayer = (e) =>{
//     if(e.target === player.current){
//       setPlayState(false);
//     }
//   }

//   return (
//     <div ref={player} onClick={closePlayer}  className={`video-player ${playState ? "": "hide"}`} >
    
//       <video className='videosize' src={assets.video} autoPlay muted controls  ></video>

//     </div>
//   )
// }

// export default VideoPlayer