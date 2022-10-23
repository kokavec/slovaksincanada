import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    style={{ "padding-bottom": "3rem"}}
  >
    <iframe
      style={{width: "100%", "min-height": "500px"}}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video