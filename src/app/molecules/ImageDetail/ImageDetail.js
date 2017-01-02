import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class ImageDetail extends Component {

  componentWillMount(){
    const id = this.props.params.id
    this.props.load(id)
  }

  render() {
    const {imageDetail} = this.props
    const {isFetching, data:{title, description, ups, downs, score, link}} = imageDetail
    const loading = (isFetching) ? <h3>Loading...</h3> : ''
  
    return (
      <div className={"panel border-left-lg"}>
        {loading}
        <p>{title + description + ups + downs + score}</p>
        <div className={"panel border-left-lg" }>
          <span className="thumbnail">
            <img className="img-responsive" src={link} />
            <div className="caption">
              <h3>{title}</h3>
              <span className="glyphicon glyphicon-thumbs-down">{downs}</span> 
              <span className="glyphicon glyphicon-thumbs-up">{ups}</span> 
              <span className="glyphicon glyphicon-star">{score}</span> 
              <p>{description}</p>
            </div>

          </span>
        </div>
      </div>
    )
  }
}

ImageDetail.propTypes = {
 imageDetail: PropTypes.object.isRequired
}

export default ImageDetail
