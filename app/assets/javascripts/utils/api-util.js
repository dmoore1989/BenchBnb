window.ApiUtil = {
  fetchBenches: function () {
    var filteredItems = FilterParamsStore.filters();
    $.ajax({
      url:"/api/benches",
      type:"GET",
      dataType: "json",
      data: filteredItems,
      success: function(data){
        ApiAction.receiveAll(data);
      }
    });
  },

  createBench: function (bench) {
    $.ajax({
      url:"/api/benches",
      type:"POST",
      dataType: "json",
      data: bench,
      success: function (data) {
        ApiAction.benchCreate(data);
      }
    });
  }
};
