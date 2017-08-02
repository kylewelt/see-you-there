/* global google */

function getMidpointPlaces (loc, types) {
  let midReg = new google.maps.LatLng(loc.lat, loc.lng)
  let service = new google.maps.places.PlacesService(document.createElement('div'))

  let request = {
    location: midReg,
    rankBy: google.maps.places.RankBy.DISTANCE,
    type: types
  }

  let places = new Promise((resolve, reject) => {
    service.nearbySearch(request, (results, status) => {
      if (status === 'OK') {
        resolve(results)
      }
    })
  })

  return places
}

export default getMidpointPlaces
