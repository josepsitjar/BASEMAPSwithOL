import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import Circle from 'ol/geom/Circle';
import CircleStyle from 'ol/style/Circle';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import * as olProj from 'ol/proj';

import Select from 'ol/interaction/Select';
import {click} from 'ol/events/condition';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});


var markerStyle = new Style({
  image: new CircleStyle({
    fill: new Fill({
      color: 'red'
    }),
    stroke: new Stroke({
      color: 'yellow'
    }),
    radius: 10
  })
});

var layer = new VectorLayer({
  source: new VectorSource({
     features: [
         new Feature({
             geometry: new Point(new olProj.fromLonLat([2.8, 41.9]))
         })
     ]
  }),
  style: markerStyle

});
map.addLayer(layer);

// Interaction
var selectInteraction = new Select({
  condition: click,
  layers: [layer],
  style: markerStyle
});


selectInteraction.on('select', function (evt) {
  alert('click over marker');
  // clear the selection to allow select again later
  this.getFeatures().clear();
});

map.addInteraction(selectInteraction);
