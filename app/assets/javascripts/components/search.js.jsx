window.Search = React.createClass({
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
