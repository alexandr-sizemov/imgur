import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { load } from '../../organisms/Gallery/GalleryModule'
import GalleryFilter from './GalleryFilter'
import {actions} from './GalleryFilterModule'

const mapStateToProps = (state, ownProps) => {
  return {
    galleryFilter : state.galleryFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: (data) => { dispatch(load(data)) },
    updateViral : (data) =>   {dispatch(actions.updateViral(data)) },
    updateLimit : (data) =>   {dispatch(actions.updateLimit(data)) },
    updateSection : (data) => {dispatch(actions.updateSection(data)) },
    updateSort : (data) =>    {dispatch(actions.updateSort(data)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryFilter)


