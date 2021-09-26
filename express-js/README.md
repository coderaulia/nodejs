# Express JS

Express.js, atau cukup Express, adalah kerangka aplikasi web back end untuk Node.js, dirilis sebagai perangkat lunak gratis dan sumber terbuka di bawah Lisensi MIT. Ini dirancang untuk membangun aplikasi web dan API. Ini telah disebut kerangka kerja server standar de facto untuk Node.js

## Kenapa Pakai Express JS

Membuat server logic itu sangat kompleks! Express JS memungkinkan kita untuk lebih fokus ke logika bisnis. Dan menggunakan framework tentu akan sangat membantu bekerja lebih cepat dan efisien.

Ada beberapa alternatif dari Express JS, seperti Vanilla Node Js, Adonis.js, Sails.js dan sebagainya.

## Menginstall dan Memanggil Express JS

Anda hanya perlu mengetikan `npm install --save express`. `--save` digunakan untuk menambahkan `devDependencies` di `package.json`. lalu untuk memanggil express pertama harus memanggil menggunakan `require` sama seperti http dan fs. Setelah itu, inisialisasi Express dengan `const app = express();`. Dapat dilihat di `app.js`.

## Middleware

Dengan menggunakan Express, tentu akan memudahkan kita dalam mengatur request dan response. Salah satunya dengan Middleware. kita dapat menggunakannya dengan memanggil fungsi `app.use((req, res, next) => {}`. Sama seperti Vanilla Node.js, yang membedakan adalah kita menggunakan `app` yang sudah diinisiasi sebelumnya, lalu menggunakan `.use`. Di dalamnya juga sama, terdapat req, dan res, bedanya kini ada `next`. Yang memungkinkan kita untuk lompat ke middleware selanjutnya. Contoh sederhana dapat dilihat di `example-middleware.js`.

## Routes

Pada Vanilla Node.js, untuk membuat sebuah routes, kita perlu menggunakan if statement yang berisi url yang di-request. Sedangkan menggunakan Express, kita hanya perlu memanggil `app.use("/", (req, res, next) => {}`.
Contoh dapat dilihat di example-routes.js.

## Parsing & Method

Express.js juga mempermudah kita untuk mengatur semua request menggunakan middleware. Selain itu juga lebih memudahkan dalam mengatur method seperti get, post, put, patch dsb. Contoh di `example-parsing.js`.

## Sistem Routing di Express

Pertama kita bisa membuat folder baru bernama routes. Selanjutnya buat file route, seperti `admin.js` untuk admin, dan `shop.js` untuk homepage. Untuk mencontohkannya kita akan membuat file baru bernama `example-home.js` (code yang sama seperti `example-parsing.js`), yang akan menggunakan `routes` dari folder routes. Di dalam file `admin.js`, alih-alih menggunakan `app.use` untuk membuat route, kini kita menggunakan `router.use` milik express yang telah dipanggil sebelumnya (`const router = express.Router();`). Di akhir file `admin.js` kita lakukan exports.router, lalu kita panggil di `example-home.js` seperti yang pernah kita lakukan sebelumnya.

## 404 not found handler

Terkadang kita maupun pengguna bisa saja salah mengetikkan url dan seharusnya menampilkan pesan error. Akan tetapi secara default, express akan menampilkan pesan error yang tidak user-friendly. Maka dari itu kita bisa membuat 404 handler dengan membuat routes baru di home (contoh di `example-home.js`), dan tambahkan `.status(404)`, di antara `res.send`. Contoh `res.status(404).send('<h1>Sorry.. the page you looking for is not found :))</h1>')`.

## Path Filtering

Dengan Express kita dapat membuat filtering url path dengan menambahkan `'/url'` di example-home.js pada bagian Admin Routes. Sehingga setiap route dari admin.js, akan dimulai dengan '/admin'. Jangan lupa untuk menambahkannya juga di dalam admin.js bagian url form post.

## Menggunakan HTML file di Views

Buatlah dokumen html di folder baru bernama views. Selanjutnya, import `path` di semua file yang akan menggunakan views system. Di dalamnya kita perlu mengganti `res.send` menjadi `res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));`. Berlaku sama dengan halaman 404 di `example-home.js`.

## Membuat Helper untuk Root Directory

Di bagian menggunakan HTML file di Views, kita telah berhasil menggunakan `sendFile` dan di dalamnya terdapat `__dirname`, dan dilanjutkan dengan `../`. Cara ini tidak efektif jika kita bekerja dengan sistem operasi berbeda. Dalam sistem linux, untuk mengubah directory secara default menggunakan `"/"`, sedangkan di Windows kita menggunakan `"\"` atau `backslash` di atas tombol enter.

Sehingga kita perlu melakukan standarisasi menggunakan helper. Dapat dilihat di `helper/path.js`.

## Menggunakan Public Static file

Mengakses file secara langsung tidak diperbolehkan oleh Express secara default. Contohnya jika anda mengakses file `shop.html` secara langsung di browser, maka akan muncul 404 error. Sehingga ini akan menyulitkan jika ingin menggunakan file-file seperti CSS, dan Gambar.

Untuk itu kita perlu melakukan inisialisasi bahwa folder public dapat diakses secara langsung. Pertama, kita perlu memanggil css di file HTML, dengan cara seperti biasa yaitu dengan tag Link dan file berasal dari `"/css/namafile.css"`. Selanjutnya kita lakukan inisialisasi di example-home.js menggunakan app.use: `app.use(express.static(path.join(__dirname, "public")));`. Hal ini diperlukan untuk memberitahukan Express bahwa semua file di folder public adalah file static yang bisa diakses secara langsung.
