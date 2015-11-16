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

  clickMarker: function (id) {
    link = 'benches/' + id
    this.props.history.pushState(null, link)
  },

  render: function () {
     return (
      <div>
        <Map
          clickMapHandler={this.clickMapHandler}
          clickMarker={this.clickMarker}
          />
        <Index />
        <FilterParam />
      </div>
    );
  }
});
