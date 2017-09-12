import React from 'react'
import {Router, Route} from 'mirrorx'
import Header from '../Header'
import Home from '../Home'
import Users from '../../containers/Users'

const App = () => (
  <Router>
    <div>
      <Route path="*" component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
    </div>
  </Router>
)

export default App
