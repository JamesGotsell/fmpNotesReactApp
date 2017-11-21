import { combineReducers } from 'redux'

import notes from './notes'
import modal from './modal'

const reducers = combineReducers({
  notes,
  modal
})

export default reducers