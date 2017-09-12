import React from 'react'
import {NavLink} from 'mirrorx'
import {Menu, Icon} from 'antd'

const MenuItem = Menu.Item

const Header = ({location}) => (
  <Menu
    mode="horizontal"
    theme="dark"
    selectedKeys={[location.pathname]}
  >
    <MenuItem key="/">
      <NavLink to="/"><Icon type="home" />Home</NavLink>
    </MenuItem>
    <MenuItem key="/users">
      <NavLink to="/users"><Icon type="bars" />Users</NavLink>
    </MenuItem>
    <MenuItem key="/not-found">
      <NavLink to="/not-found"><Icon type="frown-circle" />404</NavLink>
    </MenuItem>
    <MenuItem key="/mirror">
      <a target="_blank" href="https://github.com/mirrorjs/mirror">Mirror</a>
    </MenuItem>
  </Menu>
)

export default Header
