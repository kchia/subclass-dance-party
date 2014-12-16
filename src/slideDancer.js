var MakeSlideDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeSlideDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlideDancer.prototype.constructor = MakeSlideDancer;
MakeSlideDancer.prototype.step = function (){
  var context = this;
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    left: "+=50"
  });
};
