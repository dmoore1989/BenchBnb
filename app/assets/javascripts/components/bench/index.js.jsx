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

  showMarker: function() {
    // MapAction.highlightMarker();
  },

  benchList: function() {
    return this.state.benches.map(function (bench) {
      return < BenchDescription key={bench.id} bench={bench} />
    });
  },

  render: function () {
    return(<ul>
        {this.benchList()}
      </ul>
    );
  }
});
