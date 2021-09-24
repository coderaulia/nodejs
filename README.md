# Belajar Node.JS dari Dasar

## Kenapa ada repo ini?

Repo ini dibuat untuk menjadi dokumentasi pribadi (sama seperti dokumentasi ReactJS), untuk mempermudah dalam belajar, sekaligus memudahkan mengingat hasil belajar. Dan pastinya, semua dalam berbahasa Indonesia, sehingga harapannya bisa menjadi tempat belajar juga untuk teman-teman yang ingin belajar NodeJS.

Terima kasih.

## Apa itu Node.JS?

Node.JS adalah sebuah javascript runtime. Yang memungkinkan menjalankan Node.JS diluar browser atau di dalam server, dan melakukan hal-hal yang bahkan tidak bisa dilakukan Javascript di browser.

Node.JS bisa menjadi alternatif dari Python, PHP, Ruby on Rails, ASP.Net, dan masih banyak lagi.

Node.JS menggunakan engine v8 yang digunakan Chrome untuk menjalankan JS di browser. Mengkompilasi ke machine code sehingga bisa berjalan di komputer, dan di-handle secara efisien.

Contohnya seperti bisa menggunakan file di system lokal, membuka dan membaca files, menghapus, membuat dan mengedit files. Yang mana tidak memungkinkan dilakukan di browser.

## Peran Node.JS di dalam Web Development

1. Menjalankan server, dan menjadi server itu sendiri. Berbeda dengan PHP yang memerlukan layanan server seperti Apache atau Nginx.
2. Business Logic. Atau menghandle request dari user, memvalidasi input dari user, terhubung ke database dll.
3. Mengembalikan respon kepada user (merender ke HTML, XML, file atau JSON).

## Basic Javascript

Untuk bisa menggunakan Node.JS dengan baik, anda perlu memahami setidaknya sintaks dasar dari Javascript, dan fitur-fitur yang bisa digunakan. Anda dapat mengunjungi laman ini:
https://github.com/coderaulia/nodejs/tree/main/basic-js

## Menginstall dan Menjalankan Node.JS

1. Kunjungi nodejs.org/en/ dan donwload sesuai dengan operating system yang digunakan.
2. Instal nodejs di komputer anda.
3. Buka terminal atau command prompt. Ketikkan `node -v` Maka akan muncul versi Node.JS.
4. Ketikkan `node` di terminal untuk menjalankan nodejs di terminal. Seperti basic math dll. Jika ingin keluar tekan CTRL/Command + C.
5. Bisa juga menggunakan Visual Studio Code. Jadi bisa menjalankannya di integrated terminal, dan menuliskan kode NodeJS dengan software ini.
6. Untuk menjalankannya, anda perlu menyimpan kode dengan ekstensi .js, lalu menjalankannya di integrated terminal dengan cara `node nama-file.js`. Maka akan mengeluarkan value yang dituliskan di dalam kode.
7. Anda juga bisa menggunakan layanan online seperti REPL.it (https://replit.com).

## Membuat Node Server

-  [x] Contoh seperti di `app.js` file, kita perlu memanggil `http` module dari Node Modules.
-  [x] Selanjutnya, panggil http dan buat server dengan cara `http.createServer`.
-  [x] Lalu buat listen port `server.listen(port);`. Untuk menjalankannya, ketikkan `node app.js` di terminal, lalu buka url `localhost:port` di browser, maka akan muncul hasil `request` di terminal.
-  [x] Untuk menghentikan server dapat menekan `ctrl + c` di terminal. Dari sana akan muncul banyak sekali data request.
-  [x] Maka dari itu, perlu mendefinisikan apa saja yang ingin ditampilkan dari hasil request, beberapa informasi yang penting seperti `req.url, req.headers, req.method`. Dapat dilihat di `request-example.js`.

## Mengirim Response

Sebelumnya kita telah berhasil membuat Node server, dan hanya menampilkan request saja. Sekarang kita akan belajar mengirimkan response ke hasil request server kita. Dapat dilihat di `response-example.js`.

## Routing sederhana di Node JS

-  [x] Untuk membuat sebuah route di Node JS, pertama perlu memanggil `req.url` seperti di contoh sebelumnya.
-  [x] Lalu gunakan `if statement` untuk memastikan request yang kita inginkan, misal `"/"`, atau `"/home"` dsb.
-  [x] Di dalamnya dapat kita buat berbeda dari laman di contoh sebelumnya. Seperti di contoh `route-example.js`.
-  [x] Selanjutnya untuk melihat hasil pesan, kita buat route baru yaitu `"/message"`, dan berikan 1 kondisi lagi yaitu `method="POST"`.
-  [x] Di dalamnya, kita perlu membuat variable body untuk menaruh semua data array yang akan di-listen.
-  [x] Selanjutnya buat data listen menggunakan `req.on`. Dan push variable body tadi dengan raw data yg telah di-listen.
-  [x] Karena data yang di-listen berbentuk raw, sehingga perlu membuat `req.on('end')`, untuk melakukan parsing menjadi `string`. Dan buat variable message untuk meletakkan pesan yang telah di-parsing.
-  [x] Kita perlu memanggil package `fs` untuk bekerja dengan file. Selanjutnya di dalam `req.on('end')` tadi, buatlah fungsi `fs.writeFileSync("message.txt", "TEST");`, untuk melakukan input text ke file.
-  [x] Jalankan server, lalu inputkan data ke form, maka akan tercetak di message.txt pesan yang telah kita kirimkan sebelumnya.
