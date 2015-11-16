(function (root) {
  var _benches = [];
  var _markers = [];
  var CHANGE_EVENT = 'change';
  var resetBenches = function (benches) {
    _benches = benches;
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

    allMarkers: function () {
      return _markers.slice();
    },

    generateRemovedMarkers: function(){
      var removedMarkers = [];
      var savedMarkers = [];
      _markers.forEach(function (marker) {

        if (BenchStore.all().findById(marker.id) === -1) {
          removedMarkers.push(marker);
        } else {
          savedMarkers.push(marker);
        }
      }, this);
      _markers = savedMarkers;
      return removedMarkers;
    },

    generateNewMarkers: function () {
      var newMarkers = [];
      BenchStore.all().forEach( function (bench) {
        if (_markers.findById(bench.id) === -1) {
        marker = new google.maps.Marker({
          position:{lat: bench.lat, lng: bench.lng},
          title: bench.description,
          id: bench.id
        });
        newMarkers.push(marker);
        }
      }, this);
      _markers = _markers.concat(newMarkers);
      return newMarkers;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },


    dispatcherId: ApplicationDispatcher.register(function(payload){
      if (payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        resetBenches(payload.benches);
        BenchStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);
