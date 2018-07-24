import React from 'react'
import { ListGroup } from 'react-bootstrap'
import VideoListItem from './video-list-item'

const VideoList = props => {
  // forma elegante de retornar uma lista atraves de arrow function
  const videoItems = props.videos.map(video => {
    {
      /* o VideoList passa a funcao onVideoSelect para o componente VideoListItem */
    }
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    )
  })

  return (
    <ListGroup>
      {videoItems}
    </ListGroup>
  )
}

export default VideoList
