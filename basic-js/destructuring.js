const orang = {
	nama: "Aulia",
	umur: 23,
	salam: function () {
		console.log("Halo, nama saya " + this.name);
	},
};

// Cara normal, memanggil data "nama" dari objek orang.
// const printNama = (orangData) => {
// 	console.log(orangData.nama);
// };
// printNama(orang);

// Menggunakan destructuring
const printNama = ({ nama, umur }) => {
	console.log(nama);
};
printNama(orang);

// bisa menggunakannya secara langsung. Memanggil nama propertinya
const { nama, umur } = orang;
console.log(nama, umur);

// Array destructuring, memanggil sesuai urutan indexnya, hobi1 = array[0], hobi2 = array[1]

const hobbies = ["Olahraga", "Coding", "Nonton Film"];
const [hobi1, hobi2, hobi3] = hobbies;
console.log(hobi1, hobi3);
