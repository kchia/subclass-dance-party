var MakeFadeDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeFadeDancer.prototype = Object.create(MakeDancer.prototype);
MakeFadeDancer.prototype.constructor = MakeFadeDancer;
MakeFadeDancer.prototype.step = function (){
  var context = this;
  MakeDancer.prototype.step.call(this);
  this.$node.fadeIn();
  setTimeout(function() {
    context.$node.fadeOut();
  }, 3000);
};
