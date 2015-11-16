(function (root) {
  var _benches = [];

  var CHANGE_EVENT = 'change';

  var resetBenches = function (benches) {
    _benches = benches;
  };

  var addBench = function(bench) {
    _benches.push(bench);
  };

  Array.prototype.findById = function (id) {
    for (var i = 0; i < this.length; i++) {
      if (this[i].id === id){
        return this[i];
      }
    }
    return -1;
  },

  BenchStore = root.BenchStore = $.extend({}, EventEmitter.prototype,{
    all: function () {
      return _benches.slice();
    },


    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },


    dispatcherId: ApplicationDispatcher.register(function(payload) {
      if (payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        resetBenches(payload.benches);
        BenchStore.emit(CHANGE_EVENT);
      } else if (payload.actionType === BenchConstants.BENCH_RECEIVE) {
        addBench(payload.bench);
        BenchStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);
