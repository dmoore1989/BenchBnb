window.ShowMap = React.createClass({
  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {
        lat: this.props.bench.lat,
        lng: this.props.bench.lng
      },
      zoom: 16,
      draggable: false,
      scrollwheel: false
    };
    this.map = new google.maps.Map(map, mapOptions);
    marker = new google.maps.Marker({
      position:{
        lat: this.props.bench.lat,
        lng: this.props.bench.lng
      },
      title: this.props.bench.description
    });
    marker.setMap(this.map);
  },

  render: function () {
    return(
      <div className="map" ref="map"></div>
    );
  }

});
