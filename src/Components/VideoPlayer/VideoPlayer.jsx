import React, { useRef } from 'react'
import './video.css'
const VideoPlayer = ({ playState, setPlayState }) => {

    const player = useRef();

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }

    return (
        <div ref={player} onClick={closePlayer} className={`video-player ${playState ? "" : "hide"}`} >

            <video className='videosize' src="https://videos.pexels.com/video-files/6209572/6209572-uhd_2732_1440_25fps.mp4" autoPlay muted controls  ></video>

        </div>
    )
}

export default VideoPlayer