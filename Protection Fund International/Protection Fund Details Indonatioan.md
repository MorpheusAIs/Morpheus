# Usulan Dana Proteksi Morpheus

## Pendahuluan

White paper Morpheus menetapkan 4% dari semua emisi MOR untuk tujuan "Dana Proteksi" dan menugaskan kepada Penyedia Kode untuk bertindak sebagai orakel dalam kasus sumber dayanya diperlukan.
Jenis tindakan:

- Pembayaran hadiah bug untuk menghindari serangan.
- Pembayaran audit sebelum kontrak pintar baru diimplementasikan.
- Menghentikan kontrak pintar dalam kasus serangan yang sedang berlangsung.
- Sinyal dan Mekanisme untuk pembayaran setelah serangan.
- Rencana dalam Kasus Kehilangan Event Penting (Skenario Fork Keras)

## Kasus-Kasus Pre-Definisi yang Memicu Pembayaran Kecil

Sebelum Kontrak Pintar aktif di jaringan Ethereum, di sini ditentukan kondisi di mana Dana Proteksi akan membayar MOR atau stETH.

## Jenis Pembayaran:

1. Bug yang ditemukan dan secara bertanggung jawab diungkapkan kepada pengembang Kontrak Pintar Morpheus Capital, Kode, Compute, Komunitas atau Dana Proteksi.
2. Pembayaran audit sebelum kontrak pintar baru diimplementasikan di jaringan Morpheus.
3. Kerugian pengguna dari MOR atau stETH dalam kasus Kontrak Pintar Morpheus dieksploitasi.
4. Mengembalikan penyedia yang tidak menerima emisi MOR dalam kasus kegagalan Kontrak Pintar Morpheus.

Jumlah pembayaran dari dana proteksi harus sebanding dengan bug, kerugian, atau kesalahan emisi.

## Kondisi Penghentian untuk Kontrak Pintar

Sebelum pembayaran kerusakan dapat dihitung, harus ada kondisi yang memicu penghentian Kontrak Pintar dalam kasus serangan yang sedang berlangsung.

## Sinyal & Mekanisme untuk Pembayaran

Penyedia Kode akan berpartisipasi dalam memberi sinyal kapan pembayaran harus dipicu. Pertama, insiden akan dijelaskan dan diposting di repositori GitHub Kontrak Pintar yang terkena dampak. Termasuk daftar alamat yang terkena dampak dan jumlah MOR dan / atau stETH.

Jika sebagian besar Penyedia Kode (sebagaimana diukur berdasarkan bobot token MOR yang mereka pegang) yang berpartisipasi dalam periode Sinyal (tidak lebih dari 7 hari) memvalidasi laporan sebagai BENAR maka pembayaran akan dipicu.

Setelah pembayaran dipicu, perangkat lunak akan mengirim pesan kepada pengembang untuk mengotorisasi pembayaran ke alamat yang terkena dampak sesuai dengan jumlah yang ditentukan.

## Rencana dalam Kasus Event Kehilangan yang Signifikan

Event Kehilangan yang Signifikan didefinisikan sebagai event di mana kerugian MOR melebihi total sumber daya Dana Proteksi. Dalam hal ini, daripada melakukan pembayaran MOR, Penyedia Kode harus menerapkan Kontrak Pintar baru dan memperbaiki saldo MOR yang terkena dampak secara manual. Ini efektif akan menyebabkan fork keras dalam kode / saldo MOR dan semua Penyedia, pemegang token, dan penyedia infrastruktur lainnya harus memperbarui kode mereka ke Kontrak Pintar baru.

Dalam kasus stETH yang hilang dalam Event Kehilangan yang Signifikan, Dana Proteksi harus membayar sebanyak mungkin secara proporsional terhadap jumlah kerugian setiap orang.

## Kesimpulan

Bug dan kesalahan dalam perangkat lunak adalah kenyataan dan menandai sejarah dari dua fork keras tidak disengaja dari Bitcoin hingga The DAO selama masa awal Ethereum.

Jadi merencanakan ke depan untuk skenario dan kasus yang berbeda dan bagaimana cara mengatasinya adalah pendekatan yang bijaksana untuk melindungi dan mengurangi risiko. Untungnya, dengan menyisihkan sumber daya di muka dengan Dana Proteksi, dan juga bagian dari dana proteksi yang mendapatkan hadiah LP dalam AMM, sumber daya yang ditujukan untuk perlindungan pengguna harus tumbuh lebih besar dari waktu ke waktu.
