<template>
    <div id="allMap" ref="allMap">

    </div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNEMLRaCVtaIt-KH-U5iAvSWyWjhGPZ-w"></script>
<script>
    import 'leaflet/dist/leaflet.css';
    import * as L from 'leaflet';
    import '../lib/mapCollections';
    import '../lib/traffic/Leaflet.GoogleMutant';

    //leaflet 地图初始化
    var GoogleNormalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
            maxZoom: 23,
            minZoom: 0
        }),
        GoogleTerrainMap = L.tileLayer.chinaProvider('Google.Terrain.Map', {
            maxZoom: 23,
            minZoom: 0
        }),
        GoogleTerrainAnnotion = L.tileLayer.chinaProvider('Google.Terrain.Annotion', {
            maxZoom: 23,
            minZoom: 0
        }),
        GoogleSatelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {
            maxZoom: 23,
            minZoom: 0
        }),
        GoogleSatelliteAnnotion = L.tileLayer.chinaProvider('Google.Satellite.Annotion', {
            maxZoom: 23,
            minZoom: 0
        });
    var ArcgisNormalMap = L.tileLayer.chinaProvider('Arcgis.Normal.Map', {
            maxZoom: 18,
            minZoom: 0
        }),
        ArcgisSatelliteMap = L.tileLayer.chinaProvider('Arcgis.Satellite.Map', {
            maxZoom: 18,
            minZoom: 0
        }),
        ArcgisSatelliteAnnotion = L.tileLayer.chinaProvider('Arcgis.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 0
        });
    var OpenNormalMap = L.tileLayer.chinaProvider('Open.Normal.Map', {
        maxZoom: 23,
        minZoom: 0,
    });

    var BoxNormalMap = L.tileLayer.chinaProvider('Box.Normal.Map', {
        maxZoom: 23,
        minZoom: 0,
        id: 'mapbox.streets'

    });

    var HereNormalMap = L.tileLayer.chinaProvider('Here.Normal.Map', {
        maxZoom: 23,
        minZoom: 0,
        id: 'mapbox.streets'

    });

    var google_streets = L.layerGroup([GoogleNormalMap]),
        google_terrain = L.layerGroup([GoogleTerrainMap, GoogleTerrainAnnotion]),
        google_satellite = L.layerGroup([GoogleSatelliteMap]),
        google_hybrid = L.layerGroup([GoogleSatelliteMap, GoogleSatelliteAnnotion]);
    var arcgis_streets = L.layerGroup([ArcgisNormalMap]),
        arcgis_satellite = L.layerGroup([ArcgisSatelliteMap]),
        arcgis_hybrid = L.layerGroup([ArcgisSatelliteMap, ArcgisSatelliteAnnotion]);

    var open_streets = L.layerGroup([OpenNormalMap]);
    var here_strtad = L.layerGroup([HereNormalMap]);

    var trafficMutant = L.gridLayer.googleMutant({
        maxZoom: 24,
        type: 'roadmap'
    });
    trafficMutant.addGoogleLayer('TrafficLayer');

    var baseLayers = {
        'OpenStreetMap': open_streets,
        'Here Map': here_strtad,
        'MapBox(Street)': BoxNormalMap,
        'Google Map(Street)': google_streets,
        'Google Map(Terrain)': google_terrain,
        'Google Map(Satellite)': google_satellite,
        'Google Map(Mixing)': google_hybrid,
        'Google Map(Traffic)': trafficMutant,
        'Arcgis(Street)': arcgis_streets,
        'Arcgis(Satellite)': arcgis_satellite,
        'Arcgis(Mixing)': arcgis_hybrid,
    };
    var map;
    export default {
        data() {
            return {};
        },
        mounted() {
            map = L.map('allMap', {
                center: [51.505, -0.09],
                zoom: 13,
                layers: [open_streets], // 默认地图
                attributionControl: false, // 取消右下角leaflet显示
            });
            L.control.layers(baseLayers, null).addTo(map);
            L.control.scale().addTo(map);
        }
    };
</script>
<style scoped>
    #allMap {
        width: 100%;
        height: 100%;
    }
</style>