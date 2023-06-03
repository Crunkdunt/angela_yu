var count = 99;

function beer() {
	while (count > 0) {
		var bottleWord = ``;
		var songEnd = ``;
		var word = ``;
		if (count === 1) {
			bottleWord = "bottle";
			word = "it";
		} else {
			bottleWord = "bottles";
			word = "one";
		}
		var songStart = `${count} ${bottleWord} of beer on the wall, ${count} ${bottleWord} of beer, take ${word} down, pass it around...`;
		count--;
		if (count === 0) {
			songEnd = "Now there is no more beer on the wall!";
		} else {
			songEnd = `${count} ${bottleWord} of beer on the wall!`;
		}
		console.log(`${songStart} ${songEnd}`);
	}
}
