import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import GalleryImage from '../../atoms/GalleryImage'
import Album from '../../molecules/Album'
import GalleryFilter from '../../molecules/GalleryFilter'
import Grid from '../../atoms/Grid'

class Gallery extends Component {

  componentWillMount(){
    const {section, sort, limit, page, viral} = this.props.galleryFilter
    this.props.load({section, sort, limit, page, viral})
  }

  render() {
    const {gallery} = this.props
    const {isFetching, requestStatus} = gallery
    const loading = (isFetching) ? <h3>Loading...</h3> : ''
    const alert = (!requestStatus=='failure') ? <div className="alert alert-danger" role="alert">Images load failure</div> : ''
    return (
      <div className={"panel border-left-lg"}>
        <GalleryFilter />
        {loading}
        {alert}
        <Grid cols={3}>
          { gallery.data.map(image => (image.is_album) ? <Album {...image} key={image.id}/> : <GalleryImage {...image} key={image.id}/> ) }
        </Grid>
      </div>
    )
  }
}

Gallery.propTypes = {}

export default Gallery
