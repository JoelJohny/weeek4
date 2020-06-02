// (function(window){
// var speakWord = "Hello";
// var helloSpeaker={};
// helloSpeaker.speak=function (name) {
//   console.log(speakWord + " " + name);
//   window.helloSpeaker=helloSpeaker;
// }
// })(window);

  (function (Window){
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
  })(Window);