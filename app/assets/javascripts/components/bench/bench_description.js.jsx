window.BenchDescription = React.createClass({

  markerOn: function () {
    MapAction.markerOn(this.props.bench);
  },

  markerOff: function () {
    MapAction.markerOff(this.props.bench)
  },

  render: function () {
    return (
      <li onMouseEnter={this.markerOn}
        onMouseLeave={this.markerOff}>
          {this.props.bench.description}
      </li>
    );
  }
});
