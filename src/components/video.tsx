import React from "react";

interface VideoProps {
  videoSrcURL: string;
}
const Video = ({ videoSrcURL, ...props }: VideoProps) => (
  <div  className="w-full h-[100vh]">
    <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={videoSrcURL} type="video/mp4" />
    </video>
  </div>
);
export default Video;
