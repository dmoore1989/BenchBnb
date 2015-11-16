window.MapAction = {
  markerOn: function (bench) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.MARKER_HIGHLIGHT,
      marker_id: bench.id
    });
  },

  markerOff: function (bench) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.MARKER_UNHIGHLIGHT,
      marker_id: bench.id
    });
  },

  updateMarkers: function(markers) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.MARKER_UPDATE,
      markers: markers
    });
  }
};
