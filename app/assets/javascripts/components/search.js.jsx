window.Search = React.createClass({
  clickMapHandler: function () {
    this.props.history.pushState(null, '/benches/new');
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
