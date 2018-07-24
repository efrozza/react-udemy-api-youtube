import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div>
      <div>
        <iframe width='600' height='400' src={url} />
      </div>
      <div>
        {video.snippet.title}
      </div>
      <div>
        {video.snippet.description}
      </div>
    </div>
  )
}

export default VideoDetail
