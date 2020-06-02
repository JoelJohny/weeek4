// (function(window){
// var speakWord = "Good Bye";
// var byeSpeaker={};
// byeSpeaker.speak=function (name) {
//   console.log(speakWord + " " + name);
// }
// window.byeSpeaker=byeSpeaker;
// })(window);
(function (Window){
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
  })(Window);