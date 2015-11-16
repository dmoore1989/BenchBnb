window.MapAction = {
  markerOn: function (bench) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.MARKER_HIGHLIGHT,
      bench: bench
    })
  },

  markerOff: function (bench) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.MARKER_UNHIGHLIGHT,
      bench: bench
    })
  }
};
