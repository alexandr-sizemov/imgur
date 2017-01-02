import {fields, initialValues} from './config'

const UPDATE_SORT = 'UPDATE_SORT'
const UPDATE_LIMIT = 'UPDATE_LIMIT'
const UPDATE_SECTION = 'UPDATE_SECTION'
const UPDATE_VIRAL = 'UPDATE_VIRAL'

function updateViral(viral) {
  return{ type: UPDATE_VIRAL, viral }
}

function updateLimit(limit) {
  return{ type: UPDATE_LIMIT, limit }
}

function updateSection(section) {
  return{ type: UPDATE_SECTION, section }
}

function updateSort(sort) {
  return{ type: UPDATE_SORT, sort }
}

export const actions = { updateViral, updateLimit, updateSection, updateSort}

const ACTION_HANDLERS = {
  [UPDATE_LIMIT]:   (state, action) => Object.assign({}, state, { limit: action.limit} ),
  [UPDATE_VIRAL]:   (state, action) => Object.assign({}, state, { viral: action.viral} ),
  [UPDATE_SORT]:    (state, action) => Object.assign({}, state, { sort : action.sort} ),
  [UPDATE_SECTION]: (state, action) => Object.assign({}, state, { section: action.section} )
}

/*
    Imgur Gallery api
    Key       Required  Value
    section   optional  hot | top | user - defaults to hot
    sort      optional  viral | top | time | rising (only available with user section) - defaults to viral
    page      optional  integer - the data paging number
    window    optional  Change the date range of the request if the section is "top", day | week | month | year | all, defaults to day
    showViral optional  
  */

const initialState = {
  ...fields,
  ...initialValues
}

export default function galleryFilterReducer (state: Object = initialState, action: Action): number {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
