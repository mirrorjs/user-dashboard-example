import React from 'react'

import mirror, {render} from 'mirrorx'
import App from './components/App'

import './index.css'

mirror.defaults({
  historyMode: 'hash'
})

render(<App />, document.getElementById('root'))
