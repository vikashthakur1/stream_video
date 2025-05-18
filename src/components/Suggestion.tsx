'use client'
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import getVideoSuggestionDocument from "../app/database";


const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


export default function Suggestion() {
    const [suggestedVideos, setSuggestedVideos] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = "sNouNL5BJp5fikawDljF"; // replace with the actual document ID
                const data = await getVideoSuggestionDocument(id);


                if (data.result.exists()) {
                    const documentData = data.result.data();


                    if (documentData && documentData.title && documentData.url) {
                        setSuggestedVideos([documentData]);
                    } else {
                        console.error("Invalid data structure in document");
                    }
                } else {
                    console.log("Document not found");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };


        fetchData();
    }, []);


    return (
        <div>
            <h2>Suggested Videos</h2>
            <ul>
                {suggestedVideos.map((video, index) => (
                    <li key={index}>
                        <h3>{video.title}</h3>
                        <div>
                            <ReactPlayer
                                url={video.url}
                                width="100%"
                                height="100%"
                                controls={true}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}