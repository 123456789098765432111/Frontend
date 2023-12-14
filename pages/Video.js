// pages/videos.js

import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
export default function Videos() {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
      async function fetchVideos() {
        try {
          const response = await fetch('/api/get-videos');
          if (response.ok) {
            const data = await response.json();
            setVideos(data?.data || []); // data.data miqdorini tekshirish
          } else {
            console.error('Failed to fetch videos');
          }
        } catch (error) {
          console.error('Error fetching videos:', error);
        }
      }
  
      fetchVideos();
    }, []);
  
    return (
      <div>
        <Header/>
        <ul style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",height:"800px"}}>
          {videos.map((video) => (
              <li key={video._id}>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                      <ReactPlayer
                        url={video.url}
                        width="300px"
                        height="200px"
                        controls={true}
                        />
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-2">{video.title}</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-2">{video.description}</p>
                  </div>
              </div>

              
            </li>
          ))}
        </ul>
      </div>
    );
  }
  