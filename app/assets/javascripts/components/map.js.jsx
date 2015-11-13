window.Map = React.createClass({
  componentDidMount: function () {
    BenchStore.addChangeListener(this._setMapMarkers);
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat:40.672976, lng:-73.9880051},
      zoom: 14
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.map.addListener('idle', ApiUtil.fetchBenches);
  },

  componentWillUnmount: function () {
    removeChangeListener(this._setMapMarkers);
  },

  _setMapMarkers: function () {
    BenchStore.all().forEach(function (bench) {
      var marker = new google.maps.Marker({
        position:{lat: bench.lat, lng: bench.lng},
        title: bench.description
      });
      return marker.setMap(this.map);
    }, this);
  },

  render: function () {
    return(
      <div className="map" ref="map"></div>
    );
  },


});
