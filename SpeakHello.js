// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE


(function (window) {
  var helloSpeaker = {};

  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);

