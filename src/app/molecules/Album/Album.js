import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import AlbumImage from '../../atoms/AlbumImage'
import Grid from '../../atoms/Grid'

class Album extends Component {

  componentDidMount() {
    this.props.load(this.props.id)
  }

  render() {
    const { id, album } = this.props
    const isLoading = (!album[id]) ? 'Loading...' : ''
    const images = (album[id] && album[id].data.images) ? album[id].data.images.slice(0,3) : []
    const imagesCount = (album[id] ) ? images.length+'/'+album[id].data.images.length : ''
    const title = (album[id] && album[id].data.title) ? album[id].data.title : ''
    return (
      <div>
        <h3>{title}</h3>
        <p>Album images {imagesCount}</p>
        {isLoading}
        <Grid cols={3}>
        {
          images.map((img) => <AlbumImage key={img.id} {...img}/>)
        }
        </Grid>
      </div>
    )
  }
}

Album.propTypes = {}

export default Album