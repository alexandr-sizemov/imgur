import React, { Component, PropTypes } from 'react'

class GalleryImage extends Component {

  render () {
    let { link } = this.props
    return (
      <div className={'panel border-left-lg'}>
        <span className='thumbnail'>
          <img className='img-responsive' src={link} />
        </span>
      </div>
    )
  }
}

GalleryImage.propTypes = {
  link: PropTypes.string.isRequired
}

export default GalleryImage
