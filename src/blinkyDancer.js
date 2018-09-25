var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  return new BlinkyDancer(top, left, timeBetweenSteps);
};

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  //get basic informations about old version of dancer

  Dancer.apply(this, arguments);
  this.$node.addClass('');

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() { 

  Dancer.prototype.step.call(this);
  //let it blink
  this.$node.toggle();
};

// BlinkyDancer.prototype.lineUp = function(arr) {
//   if (window.dancers.length > 0) {
//     for (var i = 0; i < window.dancers.length; i++ ) {
//       if (window.dancers[i] === 'BlinkyDancer') {
//         lineUp(window.dancers[i]);
//       }
//     }
//   }
// };