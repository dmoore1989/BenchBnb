
(function (root) {
  var _highlightedMarker;
  var HIGHLIGHT = 'highlight';
  var UNHIGHLIGHT = 'unhighlight';
  var UPDATE = 'UPDATE';

  root.MarkerStore = $.extend({}, EventEmitter.prototype, {
    highlighted: function () {
      return _highlightedMarker;
    },

    addHighlightListener: function (callback) {
      this.on(HIGHLIGHT, callback);
    },

    addUnhighlightListener: function (callback) {
      this.on(UNHIGHLIGHT, callback);
    },

    removeHighlightListener: function (callback) {
      this.removeListener(HIGHLIGHT, callback);
    },

    removeUnhighlightListener: function (callback) {
      this.removeListener(UNHIGHLIGHT, callback);
    },

    updateMarkers: function(markers){
      _markers = BenchStore.allMarkers();
    },


    dispatcherId: ApplicationDispatcher.register(function (payload) {

      if (payload.actionType === BenchConstants.MARKER_HIGHLIGHT){
        _highlightedMarker = BenchStore.allMarkers().findById(payload.bench.id);
        MarkerStore.emit(HIGHLIGHT, _highlightedMarker);
      } else if (payload.actionType === BenchConstants.MARKER_UNHIGHLIGHT){
        MarkerStore.emit(UNHIGHLIGHT, _highlightedMarker);
        _highlightedMarker = undefined;
      }
    })
  });

})(this);
