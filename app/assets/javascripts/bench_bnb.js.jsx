$(function (){
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var Link = ReactRouter.Link

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <header><h1>Bench Bnb</h1></header>
          {this.props.children}
          <Link to="/">Return to Index</Link>
        </div>
      );
    }
  });

  React.render(
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Search} />
        <Route path="benches/new" component={BenchForm} />
        <Route path="benches/:id" component={BenchShow} />
      </Route>
    </Router>,
    document.getElementById("content")
  );

});
