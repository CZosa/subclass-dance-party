var colorTransitDancer = function(top, left, timeBetweenSteps) {
  return new colorDancer(top, left, timeBetweenSteps);
};

var colorDancer = function(top, left, timeBetweenSteps) {
  //get basic informations about old version of dancer

  Dancer.apply(this, arguments);

};

colorDancer.prototype = Object.create(Dancer.prototype);
colorDancer.prototype.constructor = colorDancer;

colorDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);

  if ( this.$node.css('color', 'red') ) {
    this.$node.css('transition', '3s');
    this.$node.css('color', 'blue'), 100000;
  }
  
  // this.$node.animate({'border-width': '30px'});
};