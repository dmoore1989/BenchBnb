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
    }.bind(this));
    this.map.addListener('click', function (e) {
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
    var removalArr = BenchStore.generateRemovedMarkers();
    for (var i = 0; i < removalArr.length; i++) {
      removalArr[i].setMap(null);
    }

    var newArr = BenchStore.generateNewMarkers();
    for (var j = 0; j < newArr.length; j++) {
      newArr[j].setMap(this.map);
    }
  },


  startAnimation: function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  },

  stopAnimation: function(marker) {
    marker.setAnimation(null);
  },

  setMarkerMap: function (marker, map) {
    marker.setMap(map);
    marker.setAnimation(google.maps.Animation.BOUNCE);
  },


  render: function () {
    return(
      <div className="map" ref="map" ></div>
    );
  },


});
