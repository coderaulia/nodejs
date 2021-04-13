const ambilData = (callback) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Selesai!");
		}, 1500);
	});

	return promise;
};

setTimeout(() => {
	console.log("waktu habis!");
	ambilData()
		.then((text) => {
			console.log(text);
			return ambilData();
		})
		.then((text2) => {
			console.log(text2);
		});
}, 2000);

console.log("halo");
console.log("Hi!");
