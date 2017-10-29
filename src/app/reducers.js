import { LOGIN, LOGOUT, SET_DRAWER, READY, CHANGE_STATE } from './consts.js'

const ui = (state = {
  drawer: false
}, action) => {
  switch (action.type) {
    case SET_DRAWER:
      return Object.assign({}, state, {
        drawer: Object.assign({}, state, {
          open: action.open
        })
      })
    default:
      return state
  }
}

const token = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.token
    case LOGOUT:
      return null
    default:
      return state
  }
}

export { ui, token }