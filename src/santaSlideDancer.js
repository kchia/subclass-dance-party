var MakeSantaSlideDancer = function(top, left, timeBetweenSteps){
  MakeSlideDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img id = "santa" src="http://rs717.pbsrc.com/albums/ww173/prestonjjrtr/Christmas/CHRISTMAS20.gif~c200">');
  this.$node.css("border","none");
};

MakeSantaSlideDancer.prototype = Object.create(MakeSlideDancer.prototype);
MakeSantaSlideDancer.prototype.constructor = MakeSantaSlideDancer;
MakeSantaSlideDancer.prototype.step = function (){
  MakeSlideDancer.prototype.step.call(this);
};
