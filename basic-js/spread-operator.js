const orang = {
	nama: "Aulia",
	umur: 23,
	salam() {
		console.log("Halo, nama saya " + this.name);
	},
};

// menggunakan spread operator di objek
const coppiedOrang = { ...orang };

const hobbies = ["Olahraga", "Coding", "Nonton Film"];

// meng-copy array dengan slice.
const coppiedArray = hobbies.slice();

//atau menggunakan spread operator untuk mengeluarkan elemen dan menjadikan array baru
const coppiedArray = [hobbies]; // akan membuat array di dalam array (nested array). [['array1', 'array2']]

const coppiedArray = [...hobbies]; // membuat array baru yg sama tanpa ada nested array. ['array1', 'array2']

// Rest operator. Akan memasukkan elemen baru tanpa mendefinisikannya di function parameter.
const toArray = (arg1, arg2, arg3) => {
	return [arg1, arg2, arg3];
}; // maka akan mengeluarkan value misal 1,2,3 jika diinputkan data 1,2,3. Jika ingin lebih tidak bisa, maka perlu rest operator.

const toArray = (...args) => {
	return args;
}; // maka akan mengeluarkan value tergantung yang diinputkan di parameter args
