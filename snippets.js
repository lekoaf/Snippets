var s_ = (function () {
  // Private variables and functions

  return {
    // Public variables and functions

    forEachThen: function (arr, forEachCallback, thenCallback) {
      if (!(arr instanceof Array)) {
        throw new Error('Feed me an array!');
      } else if (typeof forEachCallback !== 'function' || 
        typeof thenCallback !== 'function') {
        throw new Error('You need two callback functions.');
      }
      var i = -1;
      function next() {
        i++;
        if (i < arr.length) {
          return forEachCallback(arr[i], next, i);
        }
        return thenCallback();
      }
      next();
    },

    isFullscreen: function () {
      // Returns a boolean if you are in fullscreen mode.
      // IE if a video element is fullscreen
      return (document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement) ? true : false;
    },
    
    kmToMiles: function (km) {
      return parseFloat(km) * 0.621371192;
    },
    
    milesToKm: function (mi) {
      return parseFloat(mi) * 1.609344;
    },

    removeDuplicates: function (arr){
      // Removes duplicate entries in an array of 
      // numbers and/or strings
      if (!(arr instanceof Array) || arr.length < 1){
        throw new Error('This is not an array.');
        return arr;
      }

      var arrayMap = {};

      for (var i = 0; i < arr.length; i++){
        arrayMap[arr[i]] = arr[i];
      }

      arr.splice(0, arr.length);

      for (var p in arrayMap){
        arr.push(arrayMap[p]);
      }
      return arr;
    },
  }
})();
