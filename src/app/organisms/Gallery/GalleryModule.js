import apiService from '../../../utils/ApiService'
const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST'
const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS'
const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE'

function requestImages() {
  return{
    type: FETCH_IMAGES_REQUEST
  }
}

function receiveImagesSuccess(response) {
  return{
    type: FETCH_IMAGES_SUCCESS, response
  }
}

function receiveImagesError(response = {response:{success:false}}) {
  return{
    type: FETCH_IMAGES_FAILURE, response
  }
}

export function load(data) {
  return function(dispatch) {
    dispatch(requestImages())
    let api = new apiService()
    return api.gallery(data)
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
  [FETCH_IMAGES_REQUEST]: (state, action) => {
    return Object.assign({}, state, {
        isFetching: true,
        success: false,
        requestStatus: 'pending',
        data: []
    })
  },
  [FETCH_IMAGES_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
        isFetching: false,
        success: action.response.success,
        requestStatus: 'success',
        data: action.response.data,
    })
  },
  [FETCH_IMAGES_FAILURE]: (state, action) => {

    return Object.assign({}, state, {
        isFetching: false,
        success: action.response.success,
        requestStatus: 'failure',
        data: []
    })
  },
}


const initialState = {
  isFetching: false,
  success:false,
  requestStatus: 'idle',
  data:[]
}

export default function imagesReducer (state: Object = initialState, action: Action): number {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
