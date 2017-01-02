import { combineReducers } from 'redux'
import gallery from '../app/organisms/Gallery/GalleryModule'
import galleryFilter from '../app/molecules/GalleryFilter/GalleryFilterModule'
import album from '../app/molecules/Album/AlbumModule'
import imageDetail from '../app/molecules/ImageDetail/ImageDetailModule'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    gallery,
    galleryFilter,
    album,
    imageDetail,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
