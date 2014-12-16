var MakeStarBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class= "star" src="http://media.giphy.com/media/KYvHbzEZZ1CQE/giphy.gif" >')
  this.$node.css("border","none");
};

MakeStarBlinkyDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
MakeStarBlinkyDancer.prototype.constructor = MakeStarBlinkyDancer;
MakeStarBlinkyDancer.prototype.step = function (){
  MakeBlinkyDancer.prototype.step.call(this);
};
