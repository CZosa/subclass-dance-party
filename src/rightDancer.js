var LargerDancer = function(top, left, timeBetweenSteps) {
  return new largerDancer(top, left, timeBetweenSteps);
};

var largerDancer = function(top, left, timeBetweenSteps) {
  //get basic informations about old version of dancer

  Dancer.apply(this, arguments);

};

largerDancer.prototype = Object.create(Dancer.prototype);
largerDancer.prototype.constructor = largerDancer;

largerDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  
  var customStyle = {
    'transition': '5s',
    'border-width': '30px',
    'border-radius': '50%'

  };
  
  this.$node.css(customStyle);

  // this.$node.animate(style, 'fast');
  
};