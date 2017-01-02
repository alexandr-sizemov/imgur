import React from 'react'
import { IndexLink } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
  </div>
)

export default Header
