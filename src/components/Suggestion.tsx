"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const ReactPlayer = dynamic(()=> import("react-player"),{ssr: false});

const videos = [
    {
        title: "Video 1",
        url: "https://youtu.be/0na2VPn-TIw?feature=shared",
    },
    {
        title: "Video 2",
        url: "https://youtu.be/ThIvYuCFDoQ?feature=shared",
    },
];

 const Suggestion = () => {
  return (
    <div>
        <h2>Suggested Videos</h2>
        <ul>
            {videos.map((video,index) =>(
                <li key={index}>
                    <h3>{video.title}</h3>
                    <div>
                        <ReactPlayer url={video.url}
                                     width="100%"
                                     height="100%"
                                     controls={true}/>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Suggestion