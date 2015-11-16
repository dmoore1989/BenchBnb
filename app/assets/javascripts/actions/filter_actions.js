window.FilterActions = {
  updateBounds: function (bounds) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.BOUNDS_UPDATE,
      bounds: bounds
    });
  }
};
