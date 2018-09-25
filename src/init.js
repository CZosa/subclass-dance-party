$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) { /* This function sets up
  the click handlers for the create-dancer  * buttons on dancefloor.html. You
  should only need to make one small change to it.  * As long as the "data-
  dancer-maker-function-name" attribute of a  * class="addDancerButton" DOM
  node matches one of the names of the  * maker functions available in the
  global scope, clicking that node  * will call the function to make the
  dancer.  */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    // var dancerMaker = function(){ //possible callback method to lineup dancers
    //   if()
    // }
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position

    var dancer = MakeBlinkyDancer(
      $('.innerbox').height() * Math.random(),
      $('.innerbox').width() * Math.random(),
      Math.random() * 2000
    );
    $('.innerbox').append(dancer.$node);
    window.dancers.push(dancer);
    // console.log(dancer.$node);
    console.log('Here comes a new Dancer');

  });

  
  $('.addDancerButton2').on('click', function(event) { 
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = colorTransitDancer(
      $(".innerbox").height() * Math.random(),
      $(".innerbox").width() * Math.random(),
      Math.random() * 1300
    );
    $('.innerbox').append(dancer.$node);
    window.dancers.push(dancer);
    console.log('Here comes a new colorTransitDancer');
  });


  $('.addDancerButton3').on('click', function(event) { 
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position

    var dancer = LargerDancer(
      $(".innerbox").height() * Math.random(),
      $(".innerbox").width() * Math.random(),
      Math.random() * 1300
    );
    $('.innerbox').append(dancer.$node);
    window.dancers.push(dancer);
    console.log('Here comes a new dancer going to the right');
  });



  $('.lineUp').on('click', function(e) {
    // var style = {'transition': '0', 'left': '80%'};
    // $('.dancer').css(style);
    var dancerArr = window.dancers;
    for ( var i = 0; i < dancerArr.length; i++ ) {
      var dancer = dancerArr[i].$node;
      goLeft(dancer);
    }
    
  });
  
  $('.close').on('click', function(e) {
    if(window.dancers.length > 1) {
      var wholeArr = dancerDistance(window.dancers);
      var pairs = closestPair(wholeArr);
      var one = pairs.pair[0].$node;
      var two = pairs.pair[1].$node;
      // console.log(one);
      var whiten = {'border-color': 'white'};
      one.css(whiten);
      two.css(whiten);
      alert('The closest two became white!');
    } else { 
      alert('There is zero or one node here!');
    }
  });
  
  $('.topbar').on('click', function(e) {
    $('.dancer').mouseover(function() {
      console.log('mouseover');
      $( this ).find( 'span.pop' ).show();
      $( this ).find( 'span.pop' ).text( 'PUT OFF' );
    });

    $('.dancer').mouseleave(function() {
      console.log('mouseleave');
      $( this ).find( 'span.pop' ).hide();
    });
  });
  
});

