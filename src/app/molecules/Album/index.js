import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Album from './Album'
import {load} from './AlbumModule'

const mapStateToProps = (state, ownProps) => {
  return {
    album:state.album
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
)(Album)
