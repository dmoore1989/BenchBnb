window.Map = React.createClass({

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat:40.672976, lng:-73.9880051},
      zoom: 14
    };

    this.map = new google.maps.Map(map, mapOptions);
  },

  render: function () {
    return(
      <div className="map" ref="map"></div>
    );
  }

});


15.22
