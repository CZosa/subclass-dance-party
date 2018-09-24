var colorTransitDancer = function(top, left, timeBetweenSteps){
  return new colorDancer(top, left, timeBetweenSteps);
};

var colorDancer = function(top, left, timeBetweenSteps){
  //get basic informations about old version of dancer

  Dancer.apply(this, arguments);

};

colorDancer.prototype = Object.create(Dancer.prototype);
colorDancer.prototype.constructor = colorDancer;

colorDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  this.$node.css('transition', '5s');
  var style = {
  	top: 0,
  	bottom: 0,
  	left: 0,
  	right: 0
  }
  this.$node.animate(style, 'fast');
  

};