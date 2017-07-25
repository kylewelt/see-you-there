// import { SET_DIRECTIONS } from '../actions/actionTypes'

const initialState = {
  directions: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    // case SET_DIRECTIONS:
    //   return { ...state, p2p_directions: action.payload }
    default:
      return state
  }
}
