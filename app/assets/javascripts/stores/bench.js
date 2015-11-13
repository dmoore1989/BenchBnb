(function (root) {
  var _benches = [];
  var CHANGE_EVENT = 'change'
  var resetBenches = function (benches) {
    _benches = benches;
  };

  BenchStore = root.BenchStore = $.extend({}, EventEmitter.prototype,{
    all: function () {
      return _benches.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.remove(CHANGE_EVENT, callback);
    },

    dispatcherId: ApplicationDispatcher.register(function(payload){
      if (payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        resetBenches(payload.benches);
        BenchStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);
