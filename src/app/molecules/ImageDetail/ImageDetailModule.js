import apiService from '../../../utils/ApiService'
const FETCH_IMAGE_REQUEST = 'FETCH_IMAGE_REQUEST'
const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS'
const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE'

function requestImages() {
  return{
    type: FETCH_IMAGE_REQUEST
  }
}

function receiveImagesSuccess(response) {
  return{
    type: FETCH_IMAGE_SUCCESS, response
  }
}

function receiveImagesError(response) {
  return{
    type: FETCH_IMAGE_FAILURE, response
  }
}

export function load(data) {
  return function(dispatch) {
    dispatch(requestImages())
    let api = new apiService()
    return api.image(data)
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
  [FETCH_IMAGE_REQUEST]: (state, action) => {
    return Object.assign({}, state, {
        isFetching: true,
        success: false,
        requestStatus: 'pending',
        data: []
    })
  },
  [FETCH_IMAGE_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
        isFetching: false,
        success: action.response.success,
        requestStatus: 'success',
        data: action.response.data,
    })
  },
  [FETCH_IMAGE_FAILURE]: (state, action) => {
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

export default function imageDetailReducer (state: Object = initialState, action: Action): number {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
