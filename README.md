# DOT Internship 2023 (Backend Node.js)

![GitHub last commit](https://img.shields.io/github/last-commit/jeksilaen/DOT_Internship)
![GitHub repo size](https://img.shields.io/github/repo-size/jeksilaen/DOT_Internship)
![GitHub followers](https://img.shields.io/github/followers/jeksilaen?style=social)


## MVC Design Pattern :bookmark_tabs:
![alt text](https://github.com/jeksilaen/DOT_Internship/blob/main/docs_asset.png?raw=true)

### MVC adalah pattern yang memisahkan struktur aplikasi menjadi 3 kategori utama.

* Model : untuk menampung file skema database. Proyek ini menggunakan MongoDB, serta Mongoose sebagai ODM

* View : berisi file statis yang akan dikirimkan dan di-render browser. EJS digunakan sebagai template engine.

* Controller : mengatur alur aplikasi dan berisikan business logic. Terdapat direktori services untuk modularitas.

Alasan utama pemilihan pattern ini adalah sangat mudah untuk men-detect ketika terjadi suatu error karena aplikasi sudah terstruktur berdasarkan fungsinya masing-masing. Jika terjadi error pada fungsi yang terkait dengan data, hanya cukup melihat pada bagian Model untuk dilakukan debugging. Terdapat beberapa direktori selain Model, View, dan Controller pada proyek ini, seperti Utils, Routes, Public, dan lain sebagainya. Ini hanya pelengkap dari pattern MVC untuk membuat struktur aplikasi lebih modular.
