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
    // console.log('Here comes a new Dancer');

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
    // console.log('Here comes a new colorTransitDancer');
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
    // console.log('Here comes a new dancer going to the right');
  });


  $('.lineUp').on('click', function(e) {
    // var style = {'transition': '0', 'left': '80%'};
    // $('.dancer').css(style);
    var dancerArr = window.dancers;
    for ( var i = 0; i < dancerArr.length; i++ ) {
      var dancer = dancerArr[i].$node;
      goLeft(dancer);
    }
    console.log('clicked audio');
    document.getElementsByTagName('audio')[0].play();
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
      alert('The closest two nodes will be whiten up!');
    } else { 
      alert('There is zero or only one node here!');
    }
  });
  
  $('.topbar').on('click', function(e) {
    $('.dancer').mouseover(function() {
      // console.log('mouseover');
      $( this ).find( 'span.pop' ).show(); //display: block;
      $( this ).find( 'span.pop' ).text( 'PUT OFF' );
    });

    $('.dancer').mouseleave(function() {
      // console.log('mouseleave');
      $( this ).find( 'span.pop' ).hide(); // display: none;
    });
  });
  
  var paired = [];
  
  $('.dance-button').on('click', function() {
    console.log(paired);
    // console.log('click!');
    var wholeArr = dancerDistance(window.dancers);
    for (var i = 0; i < wholeArr.length; i++) {
      if ( wholeArr[i].distance < 100 && !paired.includes(wholeArr[i].distance) ) { 
        $('.foul').show();
        paired.push(wholeArr[i].distance);
        
        console.log(wholeArr[i]);
        
        var origin = wholeArr[i].pair[0].$node;
        // console.log(origin);
        var particles = `<div class="re-parents">
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                          <span class="parts"></span>
                        </div>`;
        origin.append(particles);
        //origin.find('.re-parents').css('position', 'relative');
        origin.find('.parts').show();
        origin.find('.parts').each(function() {
          $(this).css('background', colorTable[getRandomInt(0, 4)]);
          var left = getRandomInt(-1000, 1000);
          var top = getRandomInt(-500, 1000);
          var eachAct = {
            'left': left,
            'top': top
          };
          $(this).animate(eachAct, 'slow');
          $(this).hide(1000);
          // collision = true;
          // origin = undefined;
        });
        
        
      }
    }

    origin.find('.parts').each(function() {
      var eachAct = {
        'left': 0,
        'top': 0
      };
      $(this).css(eachAct);
      // collision = true;
      // origin = undefined;
    });
    
    origin = undefined;
    $('.foul').fadeOut(2500);
  });
  
  
});

