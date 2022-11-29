export function roll(sidesNum, diceNum, rollNum) {
	sidesNum = parseInt(sidesNum)
	diceNum = parseInt(diceNum)
	rollNum = parseInt(rollNum)
	var resultNums = [];
	var diceRoll = 0;
	for (var i = 0; i < rollNum; i++) {
		for (var j = 0; j < diceNum; j++) {
			diceRoll += Math.floor(Math.random()*sidesNum)+1;
		}
		resultNums[i] = diceRoll;
		diceRoll = 0;
	}
	var outcome = {
		sides: sidesNum,
		dice: diceNum,
		rolls: rollNum,
		results: resultNums
	};
	return outcome;
}
