import mirror, {actions, connect} from 'mirrorx'
import qs from 'query-string'
import Users from '../components/Users'
import userModel from '../models/users'
import {LOCATION_CHANGE} from '../constants'

// inject model
mirror.model(userModel)

// listen to route change,
// when is entering `/users`, load data
mirror.hook((action, getState) => {

  const {routing: {location}} = getState()

  if (action.type === LOCATION_CHANGE && location.pathname === '/users') {
    const query = qs.parse(location.search)
    actions.users.load(query)
  }
})

// connect component with store
export default connect(
  state => state.users,
  // this will add `save`, `load` etc. methods to Users component
  //() => actions.users
)(Users)

