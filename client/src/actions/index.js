import { SET_DIRECTIONS } from './actionTypes'
import { SET_PLACES } from './actionTypes'

export function setP2pDirections (directions) {
  return {
    type: SET_DIRECTIONS,
    payload: directions
  }
}

export function setPlaces (places) {
  return {
    type: SET_PLACES,
    payload: places
  }
}
