// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  return new Dancer(top, left, timeBetweenSteps);

  // use jQuery to create an HTML <span> tag
  //this.$node = $('<span class="dancer"></span>');

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};

var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"><i class="popFather"><span class="pop"></span></i></span>');
  this.step();
  this.setPosition(top, left);
  // debugger;
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function(argument) {
 
  var self = this;
  setTimeout(function() { self.step(); }, this.timeBetweenSteps);

  //setTimeout(function() { this.step(); }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left,
    'border': '10px solid',
    'border-radius': '10px',
    'color': 'red'
  };
  this.$node.css(styleSettings);
};