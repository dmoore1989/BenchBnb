window.FilterParam = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      minSeats: "",
      maxSeats: ""
    });
  },

  handleMin: function (e) {
    var minMax ={min: e.target.value, max: this.state.maxSeats};
    FilterActions.updateMinMax(minMax);
    this.setState({minSeats: e.target.value});
  },

  handleMax: function (e) {
    var minMax ={min: this.state.minSeats, max: e.target.value};
    FilterActions.updateMinMax(minMax);
    this.setState({maxSeats: e.target.value});
  },

  render: function () {
    return (
      <form>
        <label>Minimum Seats
          <input type="text"
            id="minSeats"
            onChange={this.handleMin}
            value={this.state.minSeats}
            >
          </input>
        </label>
        <label>Maximum Seats
          <input type="text"
            id="maxSeats"
            onChange={this.handleMax}
            value={this.state.maxSeats}>
          </input>
        </label>
      </form>
    );
  }

});
