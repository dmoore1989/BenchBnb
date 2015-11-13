window.ApiAction = {
  receiveAll: function (benches) {
    ApplicationDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};
