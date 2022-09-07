const solveEquation = function(equation) {
	// 将右x左移，将数值右移
	// 左边x数量为0 且右边为0 => Infinite solutions
	// 左边x的数量为0 且右边不为0 => No solution
	let [left, right] = equation.split('=');
	let left_x = 0;
	let left_value = 0;
	let right_x = 0;
	let right_value = 0;

	// x +x +2x -x -20x +30 -4

	let lefts = left.split('')
	let temp = null
	let temp_f = 1;
	let is_0 = 1;
	lefts.forEach(item => {
		if (item === 'x') {
			if (temp || temp === 0) {
				temp = temp || 1;
				left_x += temp_f * Number(temp) * is_0;
			} else {
				left_x += 1;
			}
			temp = null;
			temp_f = 1;
			is_0 = 1;
		} else if (item === '+' || item === '-') {
			if (temp || temp === 0) {
				temp = temp || 1;
				console.log(temp);
				left_value += temp_f * Number(temp) * is_0;
				console.log('-------', left_value);
				temp = null;
				temp_f = 1;
				is_0 = 1;
			}
			temp = 0;
			if (item === '+') {
				temp_f = 1;
			} else {
				temp_f = -1
			}
		} else {
			// 是数字
			temp = temp * 10 + Number(item);
			if (temp === 0) {
				is_0 = 0;
			}
		}
	})
	if (lefts[lefts.length - 1] !== 'x') {
		left_value += temp_f * Number(temp) * is_0;
		temp = null;
		temp_f = 1;
		is_0 = 1;
	}

	let rights = right.split('');
	rights.forEach(item => {
		if (item === 'x') {
			if (temp || temp === 0) {
				temp = temp || 1;
				right_x += temp_f * Number(temp) * is_0;
			} else {
				right_x += 1;
			}
			temp = null;
			temp_f = 1;
			is_0 = 1;
		} else if (item === '+' || item === '-') {
			if (temp || temp === 0) {
				temp = temp || 1;
				right_value += temp_f * Number(temp) * is_0;
				temp = null;
				temp_f = 1;
				is_0 = 1;
			}
			temp = 0;
			if (item === '+') {
				temp_f = 1;
			} else {
				temp_f = -1
			}
		} else {
			// 是数字
			temp = temp * 10 + Number(item);
			if (temp === 0) {
				is_0 = 0;
			}
		}
	})
	if (rights[rights.length - 1] !== 'x') {
		right_value += temp_f * Number(temp);
		temp = null;
		temp_f = 1;
		is_0 = 1;
	}

console.log('left_x:', left_x,'right_x:', right_x,'left_value:', left_value,'right_value:', right_value);

	let sum_x = left_x - right_x;
	let sum_value = right_value - left_value;

	if (sum_x === 0) {
		if (sum_value === 0) {
			return 'Infinite solutions'
		} else {
			return 'No solution'
		}
	} else {
		return 'x=' + sum_value / sum_x
	}
};

console.log(solveEquation("x+5-3+x=6+x-2"));
