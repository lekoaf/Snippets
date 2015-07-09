var s_ = (function () {
  // Private variables and functions

  return {
    // Public variables and functions

    isFullscreen: function () {
      // Returns a boolean if you are in fullscreen mode.
      // IE a video element is fullscreen
      return (document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement) ? true : false;
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
    }
  }
})();