import apiService from '../../../utils/ApiService'
const FETCH_ALBUM_IMAGES_REQUEST = 'FETCH_ALBUM_IMAGES_REQUEST'
const FETCH_ALBUM_IMAGES_SUCCESS = 'FETCH_ALBUM_IMAGES_SUCCESS'
const FETCH_ALBUM_IMAGES_FAILURE = 'FETCH_ALBUM_IMAGES_FAILURE'

function requestImages() {
  return{
    type: FETCH_ALBUM_IMAGES_REQUEST
  }
}

function receiveImagesSuccess(response) {
  return{
    type: FETCH_ALBUM_IMAGES_SUCCESS, response
  }
}

function receiveImagesError(response) {
  return{
    type: FETCH_ALBUM_IMAGES_FAILURE, response
  }
}

export function load(id) {
  return function(dispatch) {
    dispatch(requestImages())
    let api = new apiService()
    return api.album(id)
      .then(function(response) {
        dispatch(receiveImagesSuccess(response.data))
      })
      .catch(function(response){
        dispatch(receiveImagesError(response.data))
      })
  }
}

export const actions = {}

const ACTION_HANDLERS = {
  [FETCH_ALBUM_IMAGES_REQUEST]: (state, action) => {
    return Object.assign({}, state, {
        isFetching: true,
        success: false,
        requestStatus: 'pending',
        data: []
    })
  },
  [FETCH_ALBUM_IMAGES_SUCCESS]: (state, action) => {
    const requestStatus = (!action.response.success) ? action.response.data.error : 'success'
    const arr = []
    arr[action.response.data.id] = {
        isFetching: false,
        success: action.response.success,
        requestStatus,
        data: action.response.data,
    }
    return Object.assign({}, state, arr)
  },
  [FETCH_ALBUM_IMAGES_FAILURE]: (state, action) => {
    console.log(action)
    return Object.assign({}, state, {
        isFetching: false,
        success: action.response.success,
        requestStatus: 'failure',
        data: []
    })
  },
}


const initialState = {}

export default function imagesReducer (state: Object = initialState, action: Action): number {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
