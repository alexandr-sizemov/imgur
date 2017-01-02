import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class GalleryImage extends Component {

  render () {
    let { id, link, title } = this.props
    return (
      <div className={'panel border-left-lg' }>
      <Link to={'/gallery/'+id}>
        <span className='thumbnail'>
          <img className='img-responsive' src={link} />
          <div className='caption'>
            <p>{title}</p>
          </div>
        </span>
        </Link>
      </div>
    )
  }
}

GalleryImage.propTypes = {
  id : PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired 
}

export default GalleryImage
