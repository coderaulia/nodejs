# Basic Javascript itu Perlu!

Penting untuk memahami Javascript dasar dan sintaks-sintaksnya, sebelum terjun lebih jauh ke Node.JS.

## Apa saja yang perlu diketahui?

1. Sintaks dasar.
2. Menjalankan javascript.
3. Fungsi & Arrow Function.
4. Objek.
5. Array.
6. Spread & Rest Operator.
7. Destructuring Data.
8. Async & Promises.
9. Pemrograman berorientasi objek.

## Variabel

` var name = "Coderaulia";` Membuat variable berbentuk string atau teks.

` var age = 23;` Membuat variable berbentuk angka.

` var punyaHobi = true;` Berbentuk boolean, atau data berbentuk benar dan salah.

Atau kini bisa menggunakan `let` atau `const` untuk menggunakan `var`.

Contohnya bisa dilihat ke file example.js. Bagaimana cara memanggil variable ke sebuah fungsi.

## Function

Untuk membuat sebuah fungsi, bisa mendefinisikannya menggunakan:

function namaFungsi (parameter jika ada) {
return value yg ingin dikembalikan
}

Atau kini bisa menggunakan `arrow function` menggunakan tanda panah,

`const namaFungsi = (parameter jika ada) => {}`

Kini menggunakan `=>`, untuk membuat sebuah fungsi.

## Objek

Sebelumnya kita sudah belajar mengenai variable, untuk membuat objek, kita perlu mendefinikan sebuah variabel contohnya `orang` dan di dalamnya ada beberapa objek.

Objek berisi dua pasang properti dan value, contohnya `nama: 'Aulia'`, artinya properti nama berisi value Aulia.

Atau bisa menggunakan function. Untuk mendefinisikannya kita perlu menggunakan
`function() {}` atau menggunakan `properti(){}`.

Perbedaannya adalah jika menggunakan keyword function kita perlu mendefinisikan properti sama seperti nama dan umur (`properti: function(){}`). Jika menggunakan properti sekaligus function, kita cukup menuliskan `properti()`.

Contoh dapat dilihat di example.js.

## Array

Array adalah sekumpulan data yang memiliki index dan bisa kita akses secara perulangan ketika jumlahnya sangat banyak. Untuk membuat sebuah array kita dapat menggunakan cara seperti:

`const hobbies = ['Olahraga', 'Coding', 'Melukis']`

Olahraga merupakan index pertama, atau index 0 [0].

Di dalam javascript terdapat fungsi bernama `map`, yang mana bisa kita jadikan alternatif pengulangan seperti `for` loop, `while` loop, dan lain sebagainya.

Menggunakan `map` cukup mengetikkan `hobbies.map(hobi => 'Hobi saya: ' + hobi)`

## Spread Operator

Digunakan untuk mengeluarkan elemen atau properti dari sebuah array atau objek.
Contoh penggunaannya, menambahkan tiga titik untuk mengeluarkan array hobbies menjadi array baru, tanpa ada nested array `const coppiedArray = [...hobbies];`.

Sedangkan Rest operator digunakan untuk menggabungkan beberapa argumen atau parameter menjadi sebuah array. Ini akan memudahkan jika ada banyak argumen yg tidak terdefinisikan ingin diinput.
Contoh penggunaannya, sama seperti spread yang menambahkan tiga titik di depan.
`const toArray = (...args) => {`. Maka akan mengeluarkan value sejumlah yang diinputkan di dalamnya.

Jika tidak menggunakan itu (`const toArray = (arg1, arg2, arg3) => {`). Maka hanya bisa mendapatkan argumen sebanyak 3 saja, jika ingin menambahkan ke-4 dst, tidak akan muncul.

Bisa dilihat di file `spread-operator.js`.

## Destructuring

Terkadang kita membutuhkan hanya beberapa properti dari objek atau array yang berisi banyak properti. Biasanya kita memanggilnya secara manual di return value, `const printNama = (orangData) => {console.log(orangData.nama);}`.
Dari kode tersebut, kita perlu memanggil properti `nama` dari objek `orang`. Dengan menggunakan Destructuring, kita hanya perlu memanggil nama saja di parameter fungsinya.

Contoh: `const printNama = ({ nama, umur }) => {console.log(nama);};`

Atau dapat menggunakannya secara langsung, `const {nama, umur} = orang;`.

Sedangkan menggunakannya dalam array, kita hanya perlu memanggil urutan index arraynya. Contoh:

`const [hobi1, hobi2, hobi3] = hobbies;`
`console.log(hobi1, hobi3);`
Maka akan muncul index[0], dan index[2]. dari array `const hobbies = ["Olahraga", "Coding", "Nonton Film"];`

## Async & Promise

Asynchronous adalah sebuah code yang tidak secara langsung dieksekusi, memerlukan waktu tertentu untuk mengeksekusinya. Contohnya di javascript ada sebuah fungsi yang dikenal untuk membuat timer, ketika waktu habis sesuai yg sudah ditentukan, barulah menjalankan kode di dalamnya.

Contohnya `setTimeout(() => {console.log("waktu habis!");}, 2000);`. Maka akan mengeksekusi `console.log` dalam waktu 2000 milisecond.

Kita dapat mengetesnya dengan menambahkan `console log` lagi di bawahnya, maka akan muncul terlebih dahulu ketimbang `console log` pertama, inilah yg disebut synchronous code.
