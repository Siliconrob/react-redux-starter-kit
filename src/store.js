import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

const initialState = {}

export default function () {
  let middleware = applyMiddleware(thunkMiddleware)
  let store = createStore(rootReducer, initialState, middleware)

  return store
}
