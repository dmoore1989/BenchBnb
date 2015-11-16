$(function (){
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <header><h1>Bench Bnb</h1></header>
          {this.props.children}
        </div>
      );
    }
  });

  React.render(
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Search} />
      </Route>
    </Router>,
    document.getElementById("content")
  );

});
