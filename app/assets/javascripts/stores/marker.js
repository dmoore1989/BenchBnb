
(function (root) {
  var _highlightedMarker;
  var _markers = [];
  var HIGHLIGHT = 'highlight';
  var UNHIGHLIGHT = 'unhighlight';

  root.MarkerStore = $.extend({}, EventEmitter.prototype, {
    highlighted: function () {
      return _highlightedMarker;
    },

    addHighlightListener: function (marker, callback) {
      _markers.push(marker)
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

    dispatcherId: ApplicationDispatcher.register(function (payload) {
      if (payload.actionType === BenchConstants.MARKER_HIGHLIGHT){
        _highlightedMarker = _markers.findById(payload.bench.id)
        MarkerStore.emit(HIGHLIGHT, _highlightedMarker);
      } else if (payload.actionType === BenchConstants.MARKER_UNHIGHLIGHT){
        MarkerStore.emit(UNHIGHLIGHT, _highlightedMarker);
        _highlightedMarker = undefined;
      }
    })
  });

})(this);
