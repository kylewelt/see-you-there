import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import locationsReducer from './locationsReducer'
import directionsReducer from './directionsReducer'
import placesReducer from './placesReducer'

const rootReducer = combineReducers({
  form: formReducer,
  locations: locationsReducer,
  directions: directionsReducer,
  places: placesReducer
})

export default rootReducer
