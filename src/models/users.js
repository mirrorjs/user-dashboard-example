import {actions} from 'mirrorx'
import * as api from '../services/users'

export default {
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    total: null,
    page: null
  },
  reducers: {
    save(state, data) {
      return {...state, ...data}
    }
  },
  effects: {
    async load({page = 1}, getState) {
      actions.users.save({
        loading: true
      })
      const {list, total} = await api.load({page})
      actions.users.save({
        list,
        loading: false,
        total: parseInt(total, 10),
        page: parseInt(page, 10)
      })
    },
    async create({values}, getState) {
      const {users: {list, page}} = getState()
      await api.create(values)
      actions.users.load({page})
    },
    async edit({id, values}, getState) {
      const {users: {page}} = getState()
      await api.patch(id, values)
      actions.users.load({page})
    },
    async remove(id, getState) {
      const {users: {page}} = getState()
      await api.remove(id)
      actions.users.load({page})
    }
  }
}
