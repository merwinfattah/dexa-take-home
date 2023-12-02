# Dexa-Take-Home
Tugas dibuat menggunakan Node.js , EJS, mysql, dan Bootstrap.

# Database
Database terdiri dari sebuah table yang bernama task dengan schema seperti berikut :
```
task {
  id int (primary key),
  title str,
  description str,
  status str
}
```

# How to run
1. Pertama-tama clone repository
2. Buat file .env yang didalamnya memuat informasi sebagai berikut (isi dengan database info yang kamu siapkan):
```
HOST=
USER=
DATABASE=
PASSWORD=
SERVER_PORT=
```
3. Kemudian jalankan perintah berikut pada terminal:
```
$ npm i

$ node app.js
```
