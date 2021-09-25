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

Pertama kita bisa membuat folder baru bernama routes. Selanjutnya buat file route, seperti `admin.js` untuk admin, dan `shop.js` untuk homepage. Untuk mencontohkannya kita akan membuat file baru bernama `example-home.js` (code yang sama seperti `example-parsing.js`), yang akan menggunakan `routes` dari folder routes. Di dalam file `admin.js`, alih-alih menggunakan `app.use` untuk membuat route, kini kita menggunakan `router.use` milik express yang telah dipanggil sebelumnya (`const router = express.Router();`). Di akhir file `admin.js` kita lakukan exports.router, lalu kita panggil di `example-home.js` seperti yang pernah kita lakukan sbeelumnya.
