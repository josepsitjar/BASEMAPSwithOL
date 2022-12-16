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
