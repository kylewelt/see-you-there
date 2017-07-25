import {
  REQUEST_LOCATION,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_FAILURE,
  FETCH_LOCATION_SUCCESS,
  RECEIVE_GEOCODE,
  REQUEST_DIRECTIONS,
  FETCH_DIRECTIONS_REQUEST,
  FETCH_DIRECTIONS_FAILURE,
  FETCH_DIRECTIONS_SUCCESS,
  RECEIVE_DIRECTIONS,
  REQUEST_PLACES,
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_FAILURE,
  FETCH_PLACES_SUCCESS,
  RECEIVE_PLACES
} from './actionTypes'

export function requestLocation (address) {
  return {
    type: REQUEST_LOCATION,
    payload: address
  }
}

export function receiveGeocode (address, json) {
  return {
    type: RECEIVE_GEOCODE,
    address,
    location: json
  }
}
