/* global google */
import geocoder from 'geocoder'

let geoA = false
let geoB = false
let midpoint = false
let place = false

function setMapBounds (map) {
  var bounds = new google.maps.LatLngBounds()
  let posA = new google.maps.LatLng(geoA[1], geoA[0])
  let posB = new google.maps.LatLng(geoB[1], geoB[0])

  bounds.extend(posA)
  bounds.extend(posB)
  map.fitBounds(bounds)
}

function createMarkers (map) {
  let posA = new google.maps.LatLng(geoA[1], geoA[0])
  let posB = new google.maps.LatLng(geoB[1], geoB[0])

  var startA = new google.maps.Marker({
    map: map,
    position: posA,
    label: 'A'
  })

  var startB = new google.maps.Marker({
    map: map,
    position: posB,
    label: 'B'
  })

  var end = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name
  })

  var infowindow = new google.maps.InfoWindow({
    content: '<div><strong>' + place.name + '</strong></div>'
  })

  infowindow.open(map, end)
  setMapBounds(map)
}

function getPlaces (loc) {
  var map
  var service
  var midReg = new google.maps.LatLng(loc[1], loc[0])
  console.log('search:', midReg)

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: midReg
  })

  service = new google.maps.places.PlacesService(map)

  var request = {
    location: midReg,
    rankBy: google.maps.places.RankBy.DISTANCE,
    type: ['bar']
  }

  service.nearbySearch(request, (results, status) => {
    console.log('results:', results)
    console.log('status:', status)
    if (status === 'OK') {
      place = results[0]
      createMarkers(map)
    }
  })
}

function getMidpoint (geoA, geoB) {
  let midLong = (geoA[0] + geoB[0]) / 2
  let midLat = (geoA[1] + geoB[1]) / 2
  return [midLong, midLat]
}

function getGeoFromAddress (add) {
  geocoder.geocode(add, (err, data) => {
    if (err) return console.error(`error fetching geocode ${err}`)
    if (geoA) {
      geoB = [data.results[0].geometry.location.lng, data.results[0].geometry.location.lat]
      midpoint = getMidpoint(geoA, geoB)
      console.log('start A:', geoA)
      console.log('start B:', geoB)
      console.log('midpoint:', midpoint)
      getPlaces(midpoint)
    } else {
      geoA = [data.results[0].geometry.location.lng, data.results[0].geometry.location.lat]
    }
  })
}

function getGeosFromAddresses (addA, addB) {
  geoA = false
  geoB = false
  midpoint = false
  place = false

  getGeoFromAddress(addA)
  getGeoFromAddress(addB)
}

export default getGeosFromAddresses
