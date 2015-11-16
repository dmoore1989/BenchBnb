
(function (root) {
  var _highlightedMarkerId;
  var HIGHLIGHT = 'highlight';
  var UNHIGHLIGHT = 'unhighlight';
  var UPDATE = 'UPDATE';

  root.MarkerStore = $.extend({}, EventEmitter.prototype, {
    highlighted: function () {
      return _highlightedMarkerId;
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
        _highlightedMarkerId = payload.marker_id
        MarkerStore.emit(HIGHLIGHT, _highlightedMarkerId);
      } else if (payload.actionType === BenchConstants.MARKER_UNHIGHLIGHT){
        MarkerStore.emit(UNHIGHLIGHT, _highlightedMarkerId);
        _highlightedMarkerId = undefined;
      }
    })
  });

})(this);
