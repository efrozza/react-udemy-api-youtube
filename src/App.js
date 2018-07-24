import React, { Component } from 'react'
import SearchBar from './components/search-bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'
import { Grid } from 'react-bootstrap'
const API_KEY = 'AIzaSyBADYET-tpwtc6tDzjYLLWBqtfljRRLZHc'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboards')
  }

  videoSearch (term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    return (
      <div>
        <Grid>
          <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
          <VideoDetail video={this.state.selectedVideo} />
          {/* o componente VideoList recebe via props a função que seta o state do video selecionado = onVideoSelect */}
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </Grid>
      </div>
    )
  }
}

export default App
