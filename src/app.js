var goLeft = function(dancer) {
    var style = {
        'top': '80%'
    };
    dancer.css(style);
};


var dancerDistance = function(array) {
    var newArr = [];

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            // array[i], array[j] --> two dancers
            var pairObj = {};
            pairObj.distance = pythagorean(array[i], array[j]);
            pairObj.pair = [];
            pairObj.pair.push(array[i], array[j]);

            newArr.push(pairObj);
            /* {distance: pythagorean(array[i], array[j]), 
              pair: [ array[i], array[j] ]
            }  */
        }
    }
    return newArr;
};

var closestPair = function(array) {

    var result = array[0];
    var least = array[0].distance;

    for (var i = 1; i < array.length; i++) {
        if (least > array[i].distance) {
            least = array[i].distance;
            result = array[i];
        }
    }

    return result;
};

// you can have a dancer find its n closest neighbors and 
// do something based on their positions.

var pythagorean = function(dan1, dan2) {
    //I: window.dancers
    //O: distance from each other dancer, n
    var dancerOneLeft = Number(dan1.$node.css('left').slice(0, dan1.$node.css('left').length - 2));
    var dancerTwoLeft = Number(dan2.$node.css('left').slice(0, dan2.$node.css('left').length - 2));
    var dancerOneTop = Number(dan1.$node.css('top').slice(0, dan1.$node.css('top').length - 2));
    var dancerTwoTop = Number(dan2.$node.css('top').slice(0, dan2.$node.css('top').length - 2));

    return Math.sqrt(Math.pow(Math.abs(dancerOneLeft - dancerTwoLeft), 2) + Math.pow(Math.abs(dancerOneTop - dancerTwoTop), 2));
};

function getRandomInt( min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

const colorTable = ['red', 'blue', 'black', 'green'];

// var collision = false;

var change = {
  37: {
    left: "-=5"
  },

  38: {
    top: "-=5"
  },

  39: {
    left: "+=5"
  },

  40: {
    top: "+=5"
  },
};

$(document).one("keydown", keyDown)

var going;

function keyDown(e) {
  $(document).one("keyup", keyup)
  var animation = change[e.which];
  going = setInterval(keepGoing, 1);

  function keepGoing() {
    $(".ball").css(animation)
  }

}

function keyup(e) {
  console.log("up")
  clearInterval(going)
  $(document).one("keydown", keyDown)
}