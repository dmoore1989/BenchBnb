window.FilterActions = {
  updateBounds: function (bounds) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.BOUNDS_UPDATE,
      bounds: bounds
    });
  },

  updateMinMax: function (minMax) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.MINMAX_UPDATE,
      minMax: minMax
    });
  }
};
