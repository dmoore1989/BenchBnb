window.BenchShow = React.createClass({
  getInitialState: function () {
    var bench = BenchStore.all().findById(parseInt(this.props.params.id));
    return ({bench: bench});
  },

  render: function () {
    return(<h3>{this.state.bench.description}</h3>);
  }

});
