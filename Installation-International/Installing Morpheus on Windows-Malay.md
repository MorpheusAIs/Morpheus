## Memasang Morpheus pada Windows

- Mula-mula, pasang WSL2, anda boleh melakukannya dengan menjalankan `wsl --install` pada gesaan arahan pentadbir. Kemudian buka WSL2 dengan `wsl` dan ikuti proses persediaan.
    
- Kemudian jalankan `curl https://ollama.ai/install.sh | sh` untuk memasang ollama.

- Kemudian pasang python dengan melakukan `sudo apt-get update` dan `sudo apt-get install python3`.

- Kemudian jalankan `pip3 install gdown`.

- Sekarang muat turun morpheus dpkg dengan menjalankan `gdown https://drive.google.com/uc?id=1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB`.

- Sahkan integriti muat turun Morpheus oleh `sha1sum morpheus_0.0.5_amd64.deb`. pastikan ia sepadan dengan cincang `b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5`, jika tidak, hentikan proses pemasangan.

- Kemudian jalankan `sudo dpkg -i morpheus_0.0.5_amd64.deb`, jika pemasangan gagal pada mulanya, pasang dependencies dan cuba lagi.

- Sekarang setelah anda memasang morpheus tanpa sebarang ralat kebergantungan, buka 2 tetingkap WSL2 dengan membuka 2 tetingkap baris perintah dan taip wsl pada kedua-duanya, kemudian pada salah satu daripadanya jalankan `ollama serve` dan pada satu lagi jalankan `morpheus`.
