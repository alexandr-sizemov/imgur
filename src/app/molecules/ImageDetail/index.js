import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ImageDetail from './ImageDetail'
import {load} from './ImageDetailModule'

const mapStateToProps = (state, ownProps) => {
  return {
    imageDetail:state.imageDetail,
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
)(ImageDetail)
