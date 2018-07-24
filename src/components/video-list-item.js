import React from 'react'
import { ListGroupItem, Image } from 'react-bootstrap'
const VideoListItem = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url
  const videoTitle = video.snippet.title
  {
    /* o VideoListItem chama a função para setar o video selecionado */
  }
  return (
    <div>
      <ListGroupItem
        onClick={() => onVideoSelect(video)}
        key={video.etag}
        header={videoTitle}
      >
        <Image src={imageURL} responsive />
      </ListGroupItem>
    </div>
  )
}

export default VideoListItem
