window.Map = React.createClass({
  componentDidMount: function () {
    this.markers = [];
    BenchStore.addChangeListener(this._setMapMarkers);
    MarkerStore.addHighlightListener(this.startAnimation);
    MarkerStore.addUnhighlightListener(this.stopAnimation);
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat:40.672976, lng:-73.9880051},
      zoom: 14
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.map.addListener('idle', function () {
      var mapBounds = this.map.getBounds();
      var bounds = {
        "southWest":{
          "lat": mapBounds.getSouthWest().lat(),
          "lng": mapBounds.getSouthWest().lng()
        },
        "northEast":{
          "lat": mapBounds.getNorthEast().lat(),
          "lng": mapBounds.getNorthEast().lng()
        }
      };
      FilterActions.updateBounds(bounds);
    }.bind(this));
    this.map.addListener('dblclick', function (e) {
      coord = {
        lat: (e.latLng.lat()),
        lng: (e.latLng.lng())
      };
      this.props.clickMapHandler(coord);
    }.bind(this));
  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this._setMapMarkers);
    MarkerStore.removeHighlightListener(this.startAnimation);
    MarkerStore.removeUnhighlightListener(this.stopAnimation);
  },

  _setMapMarkers: function () {
    this.removeMarkers();
    this.addMarkers();
  },

  removeMarkers: function () {
    var removedMarkers = [];
    var savedMarkers = [];
    this.markers.forEach(function (marker) {
      if (BenchStore.all().findById(marker.id) === -1) {
        removedMarkers.push(marker);
      } else {
        savedMarkers.push(marker);
      }
    }, this);
    this.markers = savedMarkers;
    for (var i = 0; i < removedMarkers.length; i++) {
      removedMarkers[i].setMap(null);
    }
  },

  addMarkers: function () {
    var newMarkers = [];
    BenchStore.all().forEach( function (bench) {
      if (this.markers.findById(bench.id) === -1) {
        marker = new google.maps.Marker({
          position:{lat: bench.lat, lng: bench.lng},
          title: bench.description,
          id: bench.id,
          clickMarker: this.props.clickMarker,
          clickable: true
        });
        marker.setMap(this.map);
        marker.addListener("click", function () {
          this.clickMarker(this.id);
        });
        newMarkers.push(marker);
      }
    }, this);
    this.markers = this.markers.concat(newMarkers);
  },



  startAnimation: function(marker_id) {
    marker = this.markers.findById(marker_id);
    marker.setAnimation(google.maps.Animation.BOUNCE);
  },

  stopAnimation: function(marker_id) {
    marker = this.markers.findById(marker_id);
    marker.setAnimation(null);
  },



  render: function () {
    return(
      <div className="map" ref="map" ></div>
    );
  },


});
