import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Gallery from './Gallery'
import {load} from './GalleryModule'

const mapStateToProps = (state, ownProps) => {
  return {
    gallery:state.gallery,
    galleryFilter:state.galleryFilter,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: (data) => { dispatch(load(data)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
