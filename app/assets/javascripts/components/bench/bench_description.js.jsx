window.BenchDescription = React.createClass({

  toggleMarker: function () {
    MapAction.toggleMarker(this.props.bench);
  },

  render: function () {
    return (
      <li onMouseOver={this.toggleMarker}>{this.props.bench.description}</li>
    );
  }
});
