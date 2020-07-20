// import * as L from 'leaflet';
L.TileLayer.ChinaProvider = L.TileLayer.extend({

    initialize: function(type, options) { // (type, Object)
        var providers = L.TileLayer.ChinaProvider.providers;

        var parts = type.split('.');

        var providerName = parts[0];
        var mapName = parts[1];
        var mapType = parts[2];

        var url = providers[providerName][mapName][mapType];
        options.subdomains = providers[providerName].Subdomains;

        L.TileLayer.prototype.initialize.call(this, url, options);
    }
});

L.TileLayer.ChinaProvider.providers = {
    GaoDe: {
        Normal: {
            Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=en&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
        },
        Satellite: {
            Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
        },
        Subdomains: ['1', '2', '3', '4']
    },

    Google: {
        Normal: {
            Map: 'http://www.google.com/maps/vt?lyrs=m@189&gl=en&x={x}&y={y}&z={z}'
        },
        Terrain: {
            // Map: "http://www.google.cn/maps/vt?lyrs=t@189&gl=cn&x={x}&y={y}&z={z}",
            Map: 'http://mt0.google.com/vt/lyrs=t@132,r@292000000&hl=en&gl=en&src=app&x={x}&y={y}&z={z}&scale=2&s=Gal',
            Annotion: 'http://www.google.com/maps/vt?lyrs=h@189&gl=en&x={x}&y={y}&z={z}&scale=2&s='
        },
        Satellite: {
            Map: 'http://www.google.com/maps/vt?lyrs=s@189&gl=en&x={x}&y={y}&z={z}',
            Annotion: 'http://www.google.com/maps/vt?lyrs=h@189&gl=en&x={x}&y={y}&z={z}&scale=2&s='
        },
        Subdomains: []
    },

    Arcgis: {
        Normal: {
            Map: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
            Color: 'http://services.arcgisonline.com/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}',
            PurplishBlue: 'services.arcgisonline.com/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
            Gray: 'services.arcgisonline.com/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
            Warm: 'services.arcgisonline.com/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}',
            Cold: 'services.arcgisonline.com/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}'
        },
        Satellite: {
            Map: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            Annotion: 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
        },
        Subdomains: []

    },
    // Open: {
    //     Normal: {
    //         Map: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
    //     },
    //     Subdomains: []
    // },
    Open: {
        Normal: {
            Map: 'http://maps.i-jimi.com.cn/osm/{z}/{x}/{y}.png'
        },
        Subdomains: []
    },
    Baidu: {
        Normal: {
            Map: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        },
        Subdomains: []
    },
    Box: {
        Normal: {
            Map: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamVmZjIwMTkiLCJhIjoiY2p5cXZ6Y3loMDRzaDNuc2V1NWN0dTRmZyJ9.7RZQvvMsSQr_1P2V5om2DQ',
        },
        Subdomains: ['a', 'b', 'c']
    },
    Here: {
        Normal: {
            Map: 'http://1.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=XrDvgy4pYzFbY43YNMV7&app_code=g3lIKPQz0QygQkENIsTrDA',
        },
        Subdomains: ['a', 'b', 'c']
    },
    Bing: {
        Normal: {
            Map: 'https://dynamic.t1.tiles.ditu.live.com/comp/ch/{z}/{x}/{y}/?mkt=en&ur=en&it=G,TW,BX,L,LA&cstl=w4c',
        },
        Subdomains: ['a', 'b', 'c', ]
    }

};

L.tileLayer.chinaProvider = function(type, options) {
    return new L.TileLayer.ChinaProvider(type, options);
};