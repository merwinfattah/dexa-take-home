# dexa-take-home
Tugas dibuat menggunakan Node.js , EJS, dan Bootstrap.

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
2. Buat file .env yang didalamnya membuat informasi sebagai berikut:
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
