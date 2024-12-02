import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import video1 from "../../assets/video.mp4";
// import video2 from "../../assets/video-1.mp4";
// import video3 from "../../assets/video-1.mp4";
// import video4 from "../../assets/video-1.mp4";
// import video5 from "../../assets/video-1.mp4";
// import video6 from "../../assets/video-1.mp4";
// import video7 from "../../assets/video-1.mp4";
// import video8 from "../../assets/video-1.mp4";
// import video9 from "../../assets/video-1.mp4";
// import video10 from "../../assets/video-1.mp4";
// import video11 from "../../assets/video-1.mp4";
// import video12 from "../../assets/video-1.mp4";
// Import other videos as needed

const VideoEditing = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    { id: 1, src: "https://www.pexels.com/video/drops-of-liquid-on-a-tray-to-be-use-as-samples-3195394/" },
    { id: 2, src: "https://vimeo.com/941086622" },
    { id: 3, src: "https://vimeo.com/941086622" },
    { id: 4, src: "https://vimeo.com/941086622" },
    { id: 5, src: "https://vimeo.com/941086622" },
    { id: 6, src: "https://vimeo.com/941086622" },
    { id: 7, src: "https://vimeo.com/941086622" },
    { id: 8, src: "https://vimeo.com/941086622" }
    
    // Add more videos as needed
  ];

  const handleVideoPlay = (videoNumber) => {
    if (currentVideo !== null && currentVideo !== videoNumber) {
      const prevVideo = document.getElementById(`video${currentVideo}`);
      if (prevVideo) {
        prevVideo.pause();
      }
    }
    setCurrentVideo(videoNumber);
  };

  return (
    <div>
      
      <div className="overflow-auto text-white mb-96">
        <h4 className="uppercase tracking-[7px] text-center text-base font-medium">
          Recent works
        </h4>

        <Marquee pauseOnHover={true} style={{ whiteSpace: 'nowrap' }}>


          <div className="mt-4 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-y-4">
            {videos.map((video) => (


              <div key={video.id} style={{ marginRight: '6px' }}>
                <video
                  id={`video${video.id}`}
                  className="rounded-2xl h-[200px]"
                  controls
                  onClick={() => handleVideoPlay(video.id)}
                  controlsList="nodownload"  
                  >
                  <source src={video1}  />
                  Your browser does not support the video tag.
                </video>
              </div>

              
            ))}
          </div>


        </Marquee>
      </div>
    </div>
  );
};

export default VideoEditing;
