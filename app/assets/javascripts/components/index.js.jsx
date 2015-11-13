window.Index = React.createClass({
  getInitialState: function () {
    return ({benches: BenchStore.all()});
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._change);
  },

  _change: function () {
    this.setState({benches: BenchStore.all()});
  },

  render: function () {
    return(<div>
        {this.state.benches.map(function (bench) {return bench})}
      </div>
    );
  }
});
