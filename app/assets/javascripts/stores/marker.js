
(function (root) {
  var _marker;
  var HIGHLIGHT = 'highlight';
  var UNHIGHLIGHT = 'unhighlight';

  root.MarkerStore = $.extend({}, EventEmitter.prototype, {
    highlighted: function () {
      return _marker;
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

    removeHighlightListener: function (callback) {
      this.removeListener(UNHIGHLIGHT, callback);
    },

    dispatcherId: ApplicationDispatcher.register(function (payload) {
      if (payload.actionType === BenchConstants.MARKER_HIGHLIGHT){
        _marker = payload.bench;
        MarkerStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);
