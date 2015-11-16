window.Search = React.createClass({
  getInitialState: function () {
    return ({params: FilterParamsStore.filters()});
  },

  componentDidMount: function () {
    FilterParamsStore.addFilterListener(this.filterUpdate);
  },

  componentWillUnmount: function () {
    FilterParamsStore.removeFilterListener(this.filterUpdate);
  },

  filterUpdate: function () {
    this.setState({params: FilterParamsStore.filters()});
    ApiUtil.fetchBenches();
  },

  clickMapHandler: function (coord) {
    this.props.history.pushState(null, 'benches/new', coord);
  },

  render: function () {
     return (
      <div>
        <Map clickMapHandler={this.clickMapHandler} />
        <Index />
      </div>
    );
  }
});
