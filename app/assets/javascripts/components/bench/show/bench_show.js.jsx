window.BenchShow = React.createClass({
  getInitialState: function () {
    if (BenchStore.all().length === 0) {
      return ({bench: undefined});
    } else {
      debugger
      var bench = BenchStore.all().findById(parseInt(this.props.params.id));
      return ({bench: bench});
    }

  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this.setBench);
    ApiUtil.fetchBench(this.props.params.id);

  },

  setBench: function () {
    var bench = BenchStore.all().findById(parseInt(this.props.params.id));
    this.setState({bench: bench});
  },

  render: function () {
    if (this.state.bench){
      return (
        <div>
          <h3>{this.state.bench.description}</h3>
          < ShowMap bench={this.state.bench} />
        </div>
      );
    }
    else { return (
      <div></div>
    );
    }
  }
});
