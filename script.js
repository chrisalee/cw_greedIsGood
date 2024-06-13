function score( dice ) {
  
  let tripleOnes = 1000;
  let tripleSixs = 600;
  let tripleFives = 500;
  let tripleFours = 400;
  let tripleThrees = 300;
  let tripleTwos = 200;
  let singleOne = 100;
  let singleFive = 50;
  
  let totalScore = 0;
  let diceMap = {};
  
  for(let die = 0; die < dice.length; die++) {
    if(!diceMap[dice[die]]) diceMap[dice[die]] = 1;
    else diceMap[dice[die]]++;
  }

  for(let [key, value] of Object.entries(diceMap)) {
    if(key === '1') {
      if(value >= 3) {
        totalScore += tripleOnes;
        value -=3;
      }
      totalScore += (singleOne * value);
    }
    if(key === '5') {
      if(value >= 3) {
        totalScore += tripleFives;
        value -=3;
      }
      totalScore += (singleFive * value);
    }
    
    if(key === '2' && value >= 3) totalScore += tripleTwos;
    if(key === '3' && value >= 3) totalScore += tripleThrees;
    if(key === '4' && value >= 3) totalScore += tripleFours;
    if(key === '6' && value >= 3) totalScore += tripleSixs;
  }
  return totalScore;
}
///////////////////////////////////////////////////////////////////////////

function score( dice ) {
  var score = [0, 0, 0, 0, 0, 0];

  dice.forEach(function(die) {
    ++score[die - 1];
  });

  return score.reduce(function(total, n, i) {
    switch (i + 1) {
      case 1:
        return total + (Math.floor(n / 3) * 1000) + ((n % 3) * 100);

      case 5:
        return total + (Math.floor(n / 3) * 500) + ((n % 3) * 50);

      default:
        return total + (Math.floor(n / 3) * (i + 1) * 100);
    }
  }, 0);
}
