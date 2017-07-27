import geocoder from 'geocoder'

function getMidpoint (coords) {
  let geoA = coords[0]
  let geoB = coords[1]
  let midLat = (geoA.lat + geoB.lat) / 2
  let midLng = (geoA.lng + geoB.lng) / 2

  return {
    geoA: geoA,
    geoB: geoB,
    geoMid: {
      lat: midLat,
      lng: midLng
    }
  }
}

function getGeocode (loc) {
  let geoLoc = new Promise((resolve, reject) => {
    geocoder.geocode(loc, (err, data) => {
      if (err) {
        console.error(`error fetching geocode ${err}`)
        reject(err)
      }
      resolve(data.results[0].geometry.location)
    })
  })
  return geoLoc
}

function getGeocodeLocations (addrA, addrB) {
  let geoA = false
  let geoB = false

  geoA = getGeocode(addrA)
  geoB = getGeocode(addrB)

  return Promise.all([geoA, geoB]).then(values => {
    return getMidpoint(values)
  })
}

export default getGeocodeLocations
