// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.$node.hover(this.setPosition.bind(this, 100, 100));
  this.step();
  this.setPosition(top, left);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};

MakeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var context = this;
    setTimeout(function(){
      context.step();
    }, context.timeBetweenSteps);
  };

MakeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);

  };

MakeDancer.prototype.lineUp = function() {
  //iterate through global array of dancers
  //for each dancer, call setPosition and set left to 0?
  var dancers = window.dancers;
  for (var i = 0; i < dancers.length; i++) {
    var dancer = dancers[i];
    dancer.setPosition(this.top, 10);
  }
};

MakeDancer.prototype.action = function() {
  this.setPosition(400, 750);
};
