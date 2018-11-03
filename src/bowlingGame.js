function BowlingGame() {
  this.frameRolls = [];
  // this.frameScores = [];
  this.totalScore = 0;
}

BowlingGame.prototype.lastFrame = function() {
  return this.frameRolls[this.frameRolls.length - 1];
};

BowlingGame.prototype.firstRoll = function(numberOfPins) {
  var frame = new Frame();
  this.currentFrame = frame;
  this.currentFrame.setFirstRollValue(numberOfPins);
  if (this.currentFrame.isStrike === true) {
    this.frameRolls.push(this.currentFrame);
  }
  if (this.frameRolls.length > 0) {
    if (this.lastFrame().isSpare === true) {
      this.lastFrame().setScore(10 + this.currentFrame.firstRollValue);
      this.totalScore += this.lastFrame().score;
    }
  }
};
//     if (this.frameRolls[this.frameRolls.length - 2].isSpare === true) {
//       score = 10 + numberofPins;
//       this.frameScores.push(score);
//       this.totalScore += score;
//     }
//   this.firstRollValue = numberOfPins;
//   if (this.lastFrame === "Spare") {
//     score = 10 + this.firstRollValue;
//     this.frameScores.push(score);
//     this.totalScore += score;
//   }
// };
//
BowlingGame.prototype.secondRoll = function(numberOfPins) {
  this.currentFrame.setSecondRollValue(numberOfPins);
  if (this.currentFrame.isSpare === true) {
    this.frameRolls.push(this.currentFrame);
  } else {
    this.frameRolls.push(this.currentFrame);
    // score = this.lastFrameScore();
    // this.frameScores.push(score);
    this.totalScore += this.currentFrame.score;
  }
};
// }
//
// BowlingGame.prototype.lastFrameScore = function() {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   score = this.frameRolls[this.frameRolls.length - 1].reduce(reducer);
//   return score;
// }
