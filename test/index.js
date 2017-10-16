// 测试用例代码写在这里， window.__karma__相关的代码先忽略
const testCase1 = () => {
	const res = add(1, 3);
	if (res === 4) {
		window.__karma__.result({
			id: 1,
			description: '1 + 3 = 4',
			suite: ['sum'],
			log: ['OK'],
			success: true,
			skipped: false,
		});
	} else {
		console.log('Error');
	}
};

const testCase2 = () => {
	const res = sub(5, 2);
	if (res === 5) {
		console.log('Success');
		window.__karma__.result({
			id: 2,
			description: '5 - 2 = ' + res,
			suite: ['sub'],
			log: ['OK'],
			success: true,
			skipped: false,
		});
	} else {
		console.log('Error');
	}
};

window.__karma__.start = () => {
	window.__karma__.info({
		total: 2,
	});

	testCase1();
	testCase2();

	window.__karma__.complete();
};
