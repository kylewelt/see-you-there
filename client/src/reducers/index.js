import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import directionsReducer from './directionsReducer'
import placesReducer from './placesReducer'

const rootReducer = combineReducers({
  form: formReducer,
  directions: directionsReducer,
  places: placesReducer,
})

export default rootReducer
