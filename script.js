let coords

navigator.geolocation.getCurrentPosition(function (position){
  coords = position.coords
})

// у кого не работает
coords = {
  latitude: 50,
  longitude: 50
}

let path = `https://www.openstreetmap.org/#map=5/${coords.latitude}/${coords.longitude}`
let p = document.querySelector('.link')
p.innerHTML = `<a href="${path}">Карта</a>`


let map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([
      53.12,
      50.06
    ]),
    zoom: 10
  })
})
