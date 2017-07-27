/* global google */
import geocoder from 'geocoder'

// function setMapBounds (map) {
//   var bounds = new google.maps.LatLngBounds()
//   let posA = new google.maps.LatLng(geoA[1], geoA[0])
//   let posB = new google.maps.LatLng(geoB[1], geoB[0])
//
//   bounds.extend(posA)
//   bounds.extend(posB)
//   map.fitBounds(bounds)
// }
//
// function createMarkers (map) {
//   let posA = new google.maps.LatLng(geoA[1], geoA[0])
//   let posB = new google.maps.LatLng(geoB[1], geoB[0])
//
//   var startA = new google.maps.Marker({
//     map: map,
//     position: posA,
//     label: 'A'
//   })
//
//   var startB = new google.maps.Marker({
//     map: map,
//     position: posB,
//     label: 'B'
//   })
//
//   var end = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location,
//     title: place.name
//   })
//
//   var infowindow = new google.maps.InfoWindow({
//     content: '<div>You should meet at:<br><strong>' + place.name + '</strong></div>'
//   })
//
//   infowindow.open(map, end)
//   setMapBounds(map)
// }
//
function getMidpointPlaces (loc) {
  var map
  var service
  var midReg = new google.maps.LatLng(loc.lat, loc.lng)

  // map = new google.maps.Map(document.getElementById('location-map'), {
  //   zoom: 15,
  //   center: midReg
  // })

  service = new google.maps.places.PlacesService(document.createElement('div'))

  var request = {
    location: midReg,
    rankBy: google.maps.places.RankBy.DISTANCE,
    type: ['bar']
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
