(function (root) {
  var _filter = ({
    bounds: {},
    min: undefined,
    max: undefined
  });

  var UPDATE = 'UPDATE';

  window.FilterParamsStore= $.extend({}, EventEmitter.prototype, {
    filters: function () {
      return _filter;
    },

    addFilterListener: function (callback) {
      this.on(UPDATE, callback);
    },

    removeFilterListener: function (callback) {
      this.removeListener(UPDATE, callback);
    },

    dispatcherId: ApplicationDispatcher.register(function (payload) {
      if (payload.actionType === BenchConstants.BOUNDS_UPDATE){
        _filter.bounds = payload.bounds;
        FilterParamsStore.emit(UPDATE);
      } else if (payload.actionType === BenchConstants.MINMAX_UPDATE) {
        _filter.min = payload.minMax.min;
        _filter.max = payload.minMax.max;
        FilterParamsStore.emit(UPDATE);
      }
    })
  });
})(this);
