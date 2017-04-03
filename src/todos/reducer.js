import * as constants from './constants'

const initialState = {
  isFetching: false,
  error: null,
  search: '',
  items: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.ADD:
      return {
        ...state,
        items: [
          ...state.items,
          payload
        ]
      }

    case constants.DELETE:
      return {
        ...state,
        items: state.items.filter((value) => value.id !== payload)
      }

    case constants.LOAD:
      return {
        ...state,
        isFetching: true
      }

    case constants.SEARCH:
      return {
        ...state,
        search: payload
      }

    case constants.LOAD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: payload
      }

    default:
      return state
  }
}
