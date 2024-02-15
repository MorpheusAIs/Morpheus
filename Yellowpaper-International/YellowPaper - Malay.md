# Kertas Kuning Morpheus

Kertas kerja ini menerangkan butiran teknikal nod penuh Morpheus, Kontrak Pintar Morpheus, dan bukti berkaitan.
Dibentangkan seperti yang ditulis dalam kertas putih yang disumbangkan oleh pembangun tanpa nama Morpheus, Trinity & Neo. Pautan ke kertas putih di sini: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md
Jemahan oleh @jeremyongws

## Versi Tempatan 0.0.5 Morpheus kini tersedia:
---------
**Morpheus Versi 0.0.5 untuk Mac**

- Muat turun dari Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- cincang SHA 256 untuk pengesahan: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Versi: Morpheus-0.0.5-x64.dmg

---------
**Morpheus Versi 0.0.5 untuk Linux Debian**
- Muat turun: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Arahan: Untuk memasang, jalankan arahan ini:
sudo dpkg -i /path/to/your/morpheus.deb
NOTA: Dalam arahan di atas, gantikan "/path/to/your/morpheus.deb" dengan laluan ke fail morpheus_0.0.5_amd64.deb.
- SHA Hash untuk Pengesahan:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Versi: morpheus_0.0.5_amd64.deb
---------

Interaksi pertama dengan Morpheus 22 Oktober 2023.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Kontrak Pintar Morpheus
Mengenai tindakan berantai yang perlu disahkan oleh kontrak pintar Morpheus.

1. Fork Kontrak Pintar Hasil N2 Dialihkan ke Arbitrum
- A) ETH blockchain melalui Thorchain, menyumbang hasil kepada Pengaturcara + Penyedia Komputasi.
- B) Pengiraan ETH disumbangkan secara berkadar

2. Kemusnahan MOR Selamanya yang Boleh Dibuktikan:
- A) Alamat bakar atau fungsi bakar untuk token MOR.

3. Templat Kontrak ERC20 untuk Penerbitan MOR
- A) Token MOR Mint setiap hari kepada Modal + Komuniti secara pro-rata kepada hasil ETH yang disumbangkan.
- B) Minta token MOR setiap hari kepada Pengaturcara + Penyedia Komputasi secara pro-rata kepada MOR yang dibakar melalui yuran.

4. Bukti Morpheus - Menunjukkan Privasi, Sumber Terbuka & Keselamatan
- A) Terbitkan senarai Ejen yang telah diaudit dan markah Kedudukan Pintar mereka.
- B) Terbitkan senarai LLM yang telah diaudit dan nilai Kedudukan Pintar mereka.
- C) Terbitkan senarai Kontrak Pintar & markah Kedudukan Pintar mereka.
- D) Terbitkan senarai Gesaan & markah Kedudukan Pintar mereka.

5. Kumpulan Wang Perlindungan
- A) Edarkan MOR & ETH sekiranya berlaku penggodaman, ralat, pepijat atau serangan lain yang menyebabkan kerugian.
- B) Satu set senario yang telah ditetapkan untuk pembayaran. Dasar forking/roll back dalam kes yang melampau.
- C) Pembangun bertanggungjawab untuk menentukan kes serangan & penyelesaiannya.
- D) Dana untuk hadiah pepijat/penggodam topi putih.
- E) Dana untuk perlindungan aktor Negara Bangsa.

## Rajah Kontrak Pintar Morpheus
Gambar rajah dan perihalan pencetakan & penembakan MOR.
Penerangan mengenai Kontrak Pintar yang diperlukan.
Rajah memperincikan taburan ETH.

### Pengagihan Hadiah Kontrak Pintar Morpheus MOR
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### Contoh Pengagihan Token MOR pada hari pertama dan kedua.
![Hamparan tanpa tajuk - Helaian Google 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59eb7)9

## Contoh Pengiraan Agihan untuk Alamat 0x123 Penyumbang ETH

### Langkah pertama
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Langkah Kedua
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Langkah ketiga
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Contoh Pengiraan Pengagihan untuk Pembekal Pengiraan Alamat 0x123

### Langkah pertama
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Langkah Kedua
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### Carta Pai Pengagihan Token MOR
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Alat Pembangun Morpheus dan Timbunan Teknologi.
- Llama2 - LLM sumber terbuka yang berkuasa yang dijalankan secara tempatan.
- Ollama - Pembungkusan untuk pemasangan mudah Llama2.
- LangChain - Alat pembangun untuk menyambungkan LLM ke storan Vektor dan API.
- Editor LangSmith - Kod rendah untuk membina ejen di LangChain.
- Algoritma SmartContractRank - Menyusun Kontrak Pintar Untuk Pengguna Berdasarkan Niat (Intent).
- Algoritma AgentRank - Menyusun ejen tersuai untuk melaksanakan tindakan untuk pengguna.
- Algoritma PromptRank - Menyusun permintaan untuk pengguna berdasarkan niat/tindakan yang diunjurkan.
- Filecoin - Penyimpanan Awan & Peruntukan Pengkomputeran
- Rangkaian Akash - Rangkaian pengkomputeran terbuka untuk menjalankan LLM/ejen.
- Wallet - Shapeshift, Exodus, pilihan sumber terbuka yang lain.

## Rajah Nod Lengkap Morpheus untuk Ejen / LLM Untuk Tindakan Web3.
Audit Ejen yang sebelum ini dijalankan oleh Pengaturcara menghasilkan "Bukti Agen" bahawa fungsi yang dinyatakan Ejen sepadan dengan yang dibentangkan. Dan sudah tentu ia tidak mengandungi sebarang kod berniat jahat.

Tempat untuk penerangan proses audit, siapa yang boleh melaksanakan audit dan cara mengesahkan keputusan. Juga insentif yang dibayar kepada juruaudit.

Proof Prompt dijana pada masa interaksi pengguna yang menunjukkan niat yang dinyatakan, dipadankan dengan pilihan kontrak pintar dan nilai transaksi disahkan dengan pengguna.

## Carta Pengguna & Penyumbang Morpheus
![Rajah Penyumbang Pengguna Morpheus](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Rajah menunjukkan aliran UX daripada permintaan pengguna kepada kelulusan tindakan Web3.
![Aliran UX untuk tugasan web3 yang digesa dan tiket](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Rajah menunjukkan versi pemasangan Morpheus Tempatan.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Rajah menunjukkan versi pemasangan Morpheus P2P.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Rajah menunjukkan versi Morpheus Terpencar.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Komuniti
- Agensi Pintar - Kes/ejen penggunaan bangunan pemaju bebas untuk pengguna Morpheus.
- Komuniti Pembangun Global - Komuniti pembangun, pemula dan pengguna yang semakin berkembang.
- Komuniti merekrut pemegang ETH untuk menderma hasil kepada pembangun Morpheus, pengkomputeran dan komuniti.
- Kumpulan Pembangunan Teragih - Pemaju Kontrak Pintar untuk mengekod Kontrak Pintar Morpheus.
- Morpheus Dapps - Pasaran untuk penyepaduan Morpheus dengan Ejen Pintar pengguna.
