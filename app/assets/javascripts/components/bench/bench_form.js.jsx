var BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      lat:  this.props.location.query.lat || "",
      lng: this.props.location.query.lng || "",
      description: "",
      seating: ""
    });
  },


  submitBench: function () {
    bench = {"bench":this.state};
    ApiUtil.createBench(bench);
    this.props.history.pushState(null, "/");
  },


  render: function () {
    return (
      <form onSubmit={this.submitBench}>
        <label>Lat
          <input type="text" id="lat" valueLink={this.linkState("lat")}>
          </input>
        </label>
        <label>Lng
          <input type="text" id="lng" valueLink={this.linkState("lng")}></input>
        </label>
        <label>Description
          <textarea id="description" valueLink={this.linkState("description")}></textarea>
        </label>
        <label>Seating
          <input type="text" id="seating" valueLink={this.linkState("seating")}></input>
        </label>
        <input type="submit" value="Submit Bench!"></input>
      </form>
    );
  }
});
