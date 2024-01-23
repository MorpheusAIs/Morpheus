# Morpheus Yellow Paper

Makalah ini menjelaskan detail teknis dari full node Morpheus, Morpheus Smart Contract, dan bukti-bukti terkait.
Disajikan seperti yang tertulis dalam whitepaper yang dikontribusikan oleh pengembang anonim Morpheus, Trinity & Neo. Tautan ke whitepaper di sini: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Versi Lokal 0.0.5 dari Morpheus sudah tersedia:
---------
**Morpheus Versi 0.0.5 untuk Mac**

- Unduh dari Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- Hash SHA 256 untuk validasi: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Versi: Morpheus-0.0.5-x64.dmg

---------
**Morpheus Version 0.0.5 for Linux Debian**
- Unduh: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Petunjuk: Untuk menginstal, jalankan perintah ini:
sudo dpkg -i /path/to/your/morpheus.deb
CATATAN: Pada perintah di atas, ganti "/path/to/your/morpheus.deb" dengan jalur ke berkas morpheus_0.0.5_amd64.deb.
- Hash SHA untuk Verifikasi:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Versi: morpheus_0.0.5_amd64.deb
---------

Interaksi pertama dengan Morpheus 22 Oktober 2023.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus Smart Contracts
Pada tindakan berantai yang perlu divalidasi oleh Morpheus smart contract.

1. Fork of N2 Yield Smart Contract Dipindahkan ke Arbitrum
- A) Blockchain ETH melalui Thorchain, menyumbangkan pendapatan kepada Programmer + Compute Providers.
- B) Perhitungan ETH yang disumbangkan secara proporsional

2. Penghancuran MOR yang Dapat Dibuktikan Selamanya:
- A) Membakar alamat atau fungsi bakar untuk token MOR.

3. Contract Templat ERC20 Untuk Menerbitkan MOR
- A) Cetak token MOR setiap hari ke Capital + Komunitas secara pro-rata ke hasil ETH yang disumbangkan.
- B) Mint token MOR setiap hari ke Programmer + Compute Providers secara pro-rata ke MOR yang dibakar melalui biaya.

4. Proof of Morpheus - Mendemonstrasikan Privasi, Sumber Terbuka, & Keamanan
- A) Menerbitkan daftar Agen yang telah diaudit dan skor Smart Rank mereka.
- B) Menerbitkan daftar LLM yang telah diaudit dan nilai Smart Rank mereka.
- C) Publikasikan daftar Smart Contracts & skor Smart Rank mereka.
- D) Publikasikan daftar Prompts & skor Smart Rank mereka.

5. Dana Perlindungan
- A) Mendistribusikan MOR & ETH jika terjadi peretasan, kesalahan, bug, atau serangan lain yang menyebabkan kerugian. 
- B) Serangkaian skenario yang telah ditentukan sebelumnya untuk pembayaran. Kebijakan untuk forking / roll back dalam kasus-kasus ekstrem.
- C) Pengembang bertanggung jawab untuk menentukan kasus serangan & solusinya. 
- D) Dana untuk bug bounty / peretas topi putih.
- E) Dana untuk perlindungan dari aktor Negara Bangsa.

## Morpheus Smart Contract Diagram
Diagram dan deskripsi tentang pencetakan & pembakaran MOR.
Deskripsi Smart Contracts yang diperlukan.
Diagram yang merinci distribusi ETH.

### Distribusi Hadiah Morpheus MOR Smart Contract
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### Contoh Distribusi Token MOR pada hari pertama dan kedua.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Contoh Perhitungan Distribusi Untuk Alamat 0x123 Kontributor ETH

### Langkah Pertama
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Langkah Kedua
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Langkah Ketiga
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Contoh Perhitungan Distribusi Untuk Alamat 0x123 Compute Provider

### Langkah Pertama
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Langkah Kedua
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### Diagram Lingkaran Distribusi Token MOR
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus Developer Tools dan Tech Stack.
- Llama2 - LLM sumber terbuka yang kuat yang dijalankan secara lokal.
- Ollama - Kemasan untuk pemasangan Llama2 yang mudah.
- LangChain - Alat pengembang untuk menghubungkan LLM ke penyimpanan Vektor dan API.
- LangSmith Editor - Kode rendah untuk membangun agen di LangChain.
- Algoritma SmartContractRank - Mengurasi Smart Contracts Untuk Pengguna Berdasarkan Niat.
- Algoritma AgentRank - Mengurasi agen khusus untuk mengeksekusi tindakan bagi pengguna.
- Algoritma PromptRank - Mengkurasi permintaan untuk pengguna berdasarkan maksud / tindakan yang diproyeksikan.
- Filecoin - Penyediaan Penyimpanan & Komputasi Awan
- Akash Network - Jaringan komputasi terbuka untuk menjalankan LLM / agen.
- Dompet - Shapeshift, Exodus, opsi sumber terbuka lainnya.

## Diagram Node Lengkap Morpheus untuk Agen / LLM Untuk Tindakan Web3. 
Audit Agen yang dilakukan sebelumnya oleh Programmer menghasilkan "Bukti Agen" bahwa fungsi Agen yang dinyatakan sesuai dengan yang disajikan. Dan tentu saja tidak mengandung kode berbahaya.

Tempat untuk deskripsi proses audit, siapa yang dapat melakukan audit dan bagaimana mengesahkan hasilnya. Juga insentif yang dibayarkan kepada auditor.

Prompt Proof yang dihasilkan pada saat interaksi pengguna yang menunjukkan maksud yang diungkapkan, cocok dengan pilihan kontrak pintar dan nilai transaksi dikonfirmasi dengan pengguna. 

## Diagram Pengguna & Kontributor Morpheus
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Diagram menunjukkan alur UX dari permintaan pengguna hingga persetujuan tindakan Web3.
![UX flow for prompted web3 tasks and ticketing](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Diagram menunjukkan versi instalasi Morpheus Lokal.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Diagram menunjukkan versi pemasangan Morpheus P2P.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Diagram menunjukkan versi Desentralisasi Morpheus.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Komunitas
- Smart Agency - Pengembang freelance yang membangun kasus penggunaan / agen untuk pengguna Morpheus.
- Global Developer Community -  Komunitas pengembang, startup, dan pengguna yang terus berkembang.
- Komunitas merekrut pemegang ETH untuk menyumbangkan hasil kepada pengembang, komputasi, dan komunitas Morpheus.
- Distributed Development Group - Smart Contract Developers untuk membuat kode Morpheus Smart Contract.
- Morpheus Dapps - Pasar untuk integrasi Morpheus dengan Smart Agent pengguna.
