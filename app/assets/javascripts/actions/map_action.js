window.MapAction = {
  toggleMarker: function (bench){
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.MARKER_HIGHLIGHT,
      bench: bench
    });
  }
};
