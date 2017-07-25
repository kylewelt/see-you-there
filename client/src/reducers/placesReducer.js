// import { SET_PLACES } from '../actions/actionTypes'

const initialState = {
  places: {},
  current_place: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    // case SET_PLACES:
    //   return { ...state, places: action.payload }
    default:
      return state
  }
}
