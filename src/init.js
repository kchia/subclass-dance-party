$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });
  $(".lineUpButton").on("click", function(event) {
    var dancers = window.dancers;
    for (var i = 0; i < dancers.length; i++) {
      var dancer = dancers[i];
      dancer.setPosition(this.top, 10);
    }
  });


  setInterval(function(){
    //some action
    // iterate through array of dancers
    var dancers = window.dancers;
      // find distance between each dancer and every other dancer
    for (var i = 0; i < dancers.length; i++){
      var dancer1 = dancers[i];
      var closest;
        for(var j = i + 1; j < dancers.length; j++){
          var dancer2 = dancers[j];
          var topSquared = Math.pow((dancer1.top - dancer2.top), 2);
          var leftSquared = Math.pow((dancer1.left - dancer2.left), 2);
          var distance = Math.sqrt(topSquared + leftSquared);
          if (!closest) {
            closest = distance;
          } else if (distance < closest) {
            closest = distance;
          }
        }
        if (closest <= 100) {
          dancer1.action();
        }
    }
  }, 100);
});

