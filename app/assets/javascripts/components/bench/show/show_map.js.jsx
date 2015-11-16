window.ShowMap = React.createClass({
  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {
        lat: this.props.bench.lat,
        lng: this.props.bench.lng
      },
      zoom: 16,
      draggable: false
    };
    this.map = new google.maps.Map(map, mapOptions);

  },

  render: function () {
    return(
      <div className="map" ref="map"></div>
    );
  }

});
