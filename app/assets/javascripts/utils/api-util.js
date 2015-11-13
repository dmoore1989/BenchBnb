window.ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      url:"/api/benches",
      type:"GET",
      dataType: "json",
      success: function(data){
        ApiAction.receiveAll(data);
      }
    });
  }
};
