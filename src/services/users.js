import nattyFetch from 'natty-fetch'
import {PAGE_SIZE} from '../constants'

const URL_PREFIX = 'http://jsonplaceholder.typicode.com'

function request(url, options) {
  const r = nattyFetch.create({
    url: URL_PREFIX + url,
    // see: https://github.com/jias/natty-fetch/blob/master/docs/options.md#fit
    fit: response => ({
      success: true,
      content: response
    }),
    ...options
  })

  return r()
}

export function load({page}) {
  return request('/users', {
    data: {
      _limit: PAGE_SIZE,
      _page: page,
    },
    fit: response => {
      return {
        success: true,
        content: {
          list: response,
          // should read from header['x-total-count'], but natty-fetch does not
          // provide a way to access response headers
          total: 10
        }
      }
    }
  })
}

export function create(values) {
  return request('/users', {
    method: 'POST',
    data: values
  })
}

export function remove(id) {
  return request(`/users/${id}`, {
    method: 'DELETE'
  })
}

export function patch(id, values) {
  return request(`/users/${id}`, {
    method: 'PATCH',
    data: values
  })
}
