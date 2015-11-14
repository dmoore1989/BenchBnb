window.MapAction = {
  toggleMarker: function (bench){
    BenchStore.
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.MARKER_HIGHLIGHT,
      bench: bench
    });
  }
};
