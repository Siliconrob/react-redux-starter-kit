import * as constants from './constants'

export const addTodo = (todo) => {
  return {
    type: constants.ADD,
    payload: todo
  }
}

export const removeTodo = (id) => {
  return {
    type: constants.DELETE,
    payload: id
  }
}

export const search = (value) => {
  return {
    type: constants.SEARCH,
    payload: value
  }
}

const fetching = () => {
  return {
    type: constants.LOAD
  }
}

const fetchComplete = (todos) => {
  return {
    type: constants.LOAD_SUCCESS,
    payload: todos
  }
}

// Mockup data
// This data should be loaded form server
const todos = [
  {
    id: 1,
    title: 'You should do this',
    createdAt: new Date()
  },
  {
    id: 2,
    title: 'Another todo for @username',
    createdAt: new Date()
  }
]

export const loadTodos = () => {
  return (dispatch) => {
    dispatch(fetching())

    // This is a test to show you how to use
    // async action. Replace setTimeout wit a call
    // to a REST api. eg. fetch(`https://www.reddit.com/r/${subreddit}.json`)
    setTimeout(() => {
      dispatch(fetchComplete(todos))
    }, 1000)
  }
}
