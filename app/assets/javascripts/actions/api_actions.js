window.ApiAction = {
  receiveAll: function (benches) {
    ApplicationDispatcher.dispatch({
        actionType: BenchConstants.BENCHES_RECEIVED,
        benches: benches
      });
  },

  benchCreate: function (bench) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench:bench
    });
  }
};
