window.ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url:"/api/benches",
      type:"GET",
      dataType: "json",
      data: bounds,
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

      }
    });
  }
};
