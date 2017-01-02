import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import CoreLayout from '../app/layouts/CoreLayout/CoreLayout'
import Home from './Home/components/HomeView'
import Gallery from '../app/organisms/Gallery'
import ImageDetail from '../app/molecules/ImageDetail'


export default (store) => (
      <Route path="/" component={CoreLayout}>
        <IndexRoute component={Gallery} />
        <Route path="gallery/:id" component={ImageDetail}  />
        <Route path="gallery" component={Gallery}  />
      </Route>
)