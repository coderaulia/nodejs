# Basic Javascript itu Perlu!

Penting untuk memahami Javascript dasar dan sintaks-sintaksnya, sebelum terjun lebih jauh ke Node.JS.

## Apa saja yang perlu diketahui?

1. Sintaks dasar.
2. Menjalankan javascript.
3. Fungsi & Arrow Function.
4. Objek.
5. Array.
6. Async & Promises.
7. Pemrograman berorientasi objek.

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
