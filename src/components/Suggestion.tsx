'use client'
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/firebase"; // Make sure the path is correct

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Suggestion() {
 
type Video = {
  id: string;
  title: string;
  url: string;
};

const [suggestedVideos, setSuggestedVideos] = useState<Video[]>([]);



  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "videos"));
        const videos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched videos:", videos);
        setSuggestedVideos(videos);
      } catch (error) {
        console.error("Error fetching videos:", error.message);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Suggested Videos</h2>
      <ul className="space-y-6">
        {suggestedVideos.map((video) => (
          <li key={video.id} className="bg-gray-100 p-4 rounded-md shadow">
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <div className="mt-2">
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
