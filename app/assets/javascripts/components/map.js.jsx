window.Map = React.createClass({
  componentDidMount: function () {
    this.markers = [];
    BenchStore.addChangeListener(this._setMapMarkers);
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat:40.672976, lng:-73.9880051},
      zoom: 14
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.map.addListener('idle', function () {
      var mapBounds = this.map.getBounds();
      var bounds = {"bounds":{
        "southWest":{
          "lat": mapBounds.getSouthWest().lat(),
          "lng": mapBounds.getSouthWest().lng()
        },
        "northEast":{
          "lat": mapBounds.getNorthEast().lat(),
          "lng": mapBounds.getNorthEast().lng()
        }
      }};
      ApiUtil.fetchBenches(bounds);
      this._setMapMarkers();
    }.bind(this));
  },

  componentWillUnmount: function () {
    removeChangeListener(this._setMapMarkers);
  },

  _setMapMarkers: function () {
    this.markers.forEach(function(marker, idx) {
      if (BenchStore.all().findById(marker.id) === -1) {
        marker.setMap(null);
        this.markers.splice(idx, 1);
      }
    }, this);

    BenchStore.all().forEach( function (bench) {
      if (this.markers.findById(bench.id) === -1) {
      marker = new google.maps.Marker({
        position:{lat: bench.lat, lng: bench.lng},
        title: bench.description,
        id: bench.id
      });
      marker.setMap(this.map);
      this.markers.push(marker);
      }
    }, this);
  },

  setMarkerMap: function (bench, map) {
    marker.setMap(map);
  },

  render: function () {
    return(
      <div className="map" ref="map"></div>
    );
  },


});
