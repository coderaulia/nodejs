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

Contoh seperti di `app.js` file, kita perlu memanggil `http` module dari Node Modules. Selanjutnya, panggil http dan buat server dengan cara `http.createServer`. Lalu buat listen port `server.listen(port);`. Untuk menjalankannya, ketikkan `node app.js` di terminal, lalu buka url `localhost:port` di browser, maka akan muncul hasil `request` di terminal. Untuk menghentikan server dapat menekan `ctrl + c` di terminal. Dari sana akan muncul banyak sekali data request. Maka dari itu, perlu mendefinisikan apa saja yang ingin ditampilkan dari hasil request, beberapa informasi yang penting seperti `req.url, req.headers, req.method`.
