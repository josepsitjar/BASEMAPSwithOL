********************************************
Create basemaps for webmapping projects
********************************************

Base Cartography
=====================

Most of *webmapping* applications use base cartography to contextualize represented data.
The source of this base maps is very diverse, and despite we can also generate ourselves this data, the most usual is to use different providers.

Some of this providers are:

- OpenStreetMap (https://www.openstreetmap.org)
- Google Maps
- Mapbox (https://www.mapbox.com/maps)
- OpenMapTiles (https://openmaptiles.org/)
- ICGC (https://openicgc.github.io/)
- Stamen (http://maps.stamen.com/#toner/12/37.7706/-122.3782)
- etc


Some of this services are not free, or may be offered for free but with limits.
We should take this in considerations and, according to our site visits, we'll have to contract the services.

We can also choose one specific provider according to the predefined styles offered, if they are on the line of our application.
Some examples:

Midimapping: https://sigserver4.udg.edu/apps/midimapping

Mosquito Alert: http://www.mosquitoalert.com/ca/

.. note::
   The process to generate our own base cartography for a webmapp application, means:

   a) Dispose of the reference Cartography
   b) Apply the corresponding styles
   c) Allocate the datasets
   d) Optimally serve the cartography


Vector Tiles vs Raster Tiles
=============================

Actually (and leaving out the OGC services) there are basically two ways to generate base maps: Vector Tiles and Raster Tiles.

Using raster tiles, the map is not stored in a single image. Small regular tiles are **pregenerated** for each zoom level, and are combined to form the entier map.
In this way, only a small fraction of a large set of data is served to the user, guaranteeing a better speed in the delivery of data on a web environment.


.. figure:: ./_static/teselas_raster.jpeg
	:align: center


On the other side, in vector tiles, the styles are rendered on the client browser (they are not pregenerated). Offer an inifity zoom capacity, and as vector data is available on the client, maps can be represented with a lot of resolution.
Also the client has acces to he information of geographic objects (attributs and geometry), as are not images, but vector entities.


Initializing a web mapping project
==================================

We are going to use the OpenLayers library: https://openlayers.org

.. note::
   Leaflet and OpenLayers allow Vector Tiles and Raster Tiles layers. But Leaflet doesn't incorporates the capacity to interpret styles generated with the **Vector Tile GL** Mapbox specification, and must be created according to the library specification, which doesn't allows to integrate a style generated with ContextMaps (ICGC) or Mapbox.


In order to work on an OpenLayers Project, it's recomended to use **Node.js**.

Working with Node offer's some advantages:

1. Work with modules, so it's not necessary to load all the library.
2. Offer's a local development server.
3. Used by the OpenLayers demonstration page.

Follow this instructions to initialize an OpenLayers project with NOde:

.. code-block:: console

  mkdir mapa
  cd mapa
  npx create-ol-app
  npm start


This will automatically create the aplication, separating the html, js and css files. Open this files with a code editor as Atom or VisualStudio and inspect them.
To visualize the map, just copy the url on a browser.

Adding layers to map
=====================

We can add multiple layers to OpenLayers. For example, a marker, and apply later a style to it. Use the following code:

.. code-block:: javascript

    var markerStyle = new ol.style.Style({
      image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({color: 'red'}),
        stroke: new ol.style.Stroke({color: 'white', width: 3})
      })
    });

    var layer = new ol.layer.Vector({
      source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([2.8, 41.9]))
             })
         ]
      }),
      style: markerStyle
    });
    map.addLayer(layer);
