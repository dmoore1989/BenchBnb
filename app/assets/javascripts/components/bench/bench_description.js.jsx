window.BenchDescription = React.createClass({

  markerOn: function () {
    MapAction.markerOn(this.props.bench);
  },

  markerOff: function () {
    MapAction.markerOff(this.props.bench);
  },

  render: function () {
    var link = "/benches/" + this.props.bench.id;
    return (
      <li onMouseEnter={this.markerOn}
        onMouseLeave={this.markerOff}>
        <ReactRouter.Link to={link} >
            {this.props.bench.description}
        </ReactRouter.Link>
      </li>
    );
  }
});
