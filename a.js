var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM() })
            ],
            view: new ol.View({
            center: ol.proj.fromLonLat([18.593484, 54.354736]),
            zoom: 16 })
          });
          var layer = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [
                      new ol.Feature({
                                geometry: new ol.geom.Point(ol.proj.fromLonLat([18.59348, 54.354736])),
                                color:  '#FF0000'
                                
                                      }) ]
                                        })
                                        });
                                  map.addLayer(layer);