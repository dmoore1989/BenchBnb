
(function (root) {
  var _marker;
  CHANGE_EVENT = 'highlighted';

  root.MarkerStore = $.extend({}, EventEmitter.prototype, {
    highlighted: function () {
      return _marker;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: ApplicationDispatcher.register(function (payload){
      if (payload.actionType === BenchConstants.MARKER_HIGHLIGHT){
        _marker = payload.marker;
        MarkerStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);
