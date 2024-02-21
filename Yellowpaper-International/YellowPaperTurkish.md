# Morpheus Sarı Kağıt

Bu makale Morpheus tam düğümünün, Morpheus Akıllı Sözleşmesinin ve ilgili kanıtların teknik ayrıntılarını açıklamaktadır.
Morpheus, Trinity ve Neo'nun anonim geliştiricileri tarafından katkıda bulunulan whitepaper'da yazıldığı şekliyle sunulmuştur. Teknik incelemeye buradan ulaşabilirsiniz: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Morpheus'un 0.0.5 Yerel Sürümü şu adreste yayında:
---------
**Morpheus Sürüm 0.0.5 Mac için**
- Google Drive'dan indirin: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- Doğrulama için SHA 256 karması: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Sürüm Morpheus-0.0.5-x64.dmg

---------
Linux Debian için **Morpheus Sürüm 0.0.5**
- Downalod: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Talimatlar: Yüklemek için bu komutu çalıştırın:
sudo dpkg -i /path/to/your/morpheus.deb
NOT: Yukarıdaki komutta "/path/to/your/morpheus.deb" yerine morpheus_0.0.5_amd64.deb dosyasına giden yolu yazın.
- Doğrulama için SHA Hash:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Sürüm: morpheus_0.0.5_amd64.deb
---------

Morpheus ile ilk etkileşim 22 Ekim 2023.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus Akıllı Sözleşmeleri
Morpheus akıllı sözleşmesi tarafından onaylanması gereken zincir eylemlerinde.

1. N2 Yield Akıllı Sözleşmesinin Çatalı Arbitrum'da Yeniden Dağıtıldı
- A) Thorchain aracılığıyla ETH'yi kilitleyin, verimi Kodlayıcılara + Hesaplama Sağlayıcılarına bağışlayın.
- B) Bağışlanan ETH'nin oranını hesaplayın 

2. MOR'un Sonsuza Kadar Kanıtlanabilir İmhası:
- A) MOR belirteçleri için yakma adresi veya yakma işlevi.

3. MOR Vermek İçin ERC20 Şablon Sözleşmesi
- A) Mint MOR tokenleri günlük olarak Capital + Community'ye bağışlanan ETH getirisine orantılı olarak.
- B) MOR tokenlerini günlük olarak Kodlayıcılara + Hesaplama sağlayıcılarına, ücretler yoluyla yakılan MOR ile orantılı olarak daraltın.

4. Morpheus'un Kanıtı - Gizlilik, Açık Kaynak ve Güvenliği Gösterin
- A) Denetlenen Acentelerin listesini ve Smart Rank puanlarını yayınlayın.
- B) Denetlenen LLM'lerin listesini ve Smart Rank puanlarını yayınlayın.
- C) Akıllı Sözleşmelerin listesini ve Akıllı Sıralama puanlarını yayınlayın.
- D) İstemlerin listesini ve Akıllı Sıralama puanlarını yayınlayın.

5. Koruma Fonları
- A) Kayıplara neden olan hack, hata, bug veya diğer saldırı durumlarında MOR & ETH dağıtın. 
- B) Ödeme için önceden tanımlanmış senaryo seti. Aşırı durumlarda çatallanma / geri alma politikaları.
- C) Saldırı vakalarını ve bunların çözümlerini belirlemekten sorumlu geliştiriciler. 
- D) Hata ödülleri / beyaz şapkalı bilgisayar korsanları için fonlar.
- E) Ulus Devlet aktörlerinden korunmak için fonlar.

## Morpheus Akıllı Sözleşme Diyagramları
Diyagramlar ve MOR basma ve yakma açıklamaları.
Gerekli akıllı sözleşmelerin açıklamaları.
ETH dağıtımını detaylandıran diyagramlar. 

### Morpheus MOR Akıllı Sözleşme Ödülleri Dağıtımı
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### MOR Token Dağıtım Örneği 1. Gün ve 2. Gün.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## 0x123 Adresi İçin Örnek Dağıtım Hesaplaması ETH Katılımcısı

### Birinci Adım
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### İkinci Adım
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Üçüncü Adım
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## 0x123 Adresi İçin Örnek Dağıtım Hesaplaması Hesaplama Sağlayıcısı

### Birinci Adım
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### İkinci Adım
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR Token Dağılımı Pasta Grafiği
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus Geliştirici Araçları ve Teknoloji Yığını.
- Llama2 - Yerel olarak çalıştırılan sağlam açık kaynaklı LLM.
- Ollama - Llama2'nin kolay kurulumu için paketleme.
- LangChain - LLM'yi Vektör depolarına ve API'lere bağlamak için geliştirici aracı.
- LangSmith Editor - LangChain üzerinde aracılar oluşturmak için düşük kod.
- SmartContractRank Algoritması - Kullanıcı İçin Akıllı Sözleşmeleri Niyete Dayalı Olarak Seçme
- AgentRank Algoritması - Kullanıcı için eylemleri yürütmek üzere özel ajanların seçilmesi.
- PromptRank Algoritması - Kullanıcılar için öngörülen niyet / eyleme göre istemleri seçme.
- Filecoin - Depolama ve Bulut İşlem Sağlama
- Akash Network - LLM'leri / aracıları çalıştırmak için açık hesaplama ağı.
- Cüzdanlar - Shapeshift, Exodus, diğer açık kaynak seçenekleri.

## Morpheus Web3 Eylemleri için Aracı / LLM'ler için Tam Düğüm Diyagramları. 
Aracıların belirtilen işlevlerinin sunulduğu gibi olduğuna dair bir "Aracı Kanıtı" oluşturan Kodlayıcılar tarafından önceden gerçekleştirilen Aracı Denetimleri. Ve tabii ki kötü niyetli kod içermez.

Denetim sürecinin tanımı, denetimleri kimin yapabileceği ve sonuçlarının nasıl belgelendirileceği için yer tutucu. Ayrıca denetçilere ödenen teşvikler.

Bir kullanıcı etkileşimi sırasında oluşturulan ve ifade edilen niyeti gösteren Prompt Proof, akıllı sözleşme seçimiyle eşleşir ve işlem değerleri kullanıcıyla onaylanır. 

## Morpheus Kullanıcı ve Katılımcı Diyagramı
![Morpheus Kullanıcı Katılımcı Diyagramı](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Diyagram, kullanıcı isteminden Web3 eyleminin onaylanmasına kadar olan UX akışını gösterir.
![İstenen web3 görevleri ve biletleme için UX akışı](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Diyagram Morpheus Yerel kurulum sürümünü göstermektedir.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Diyagram Morpheus P2P yükleme sürümünü göstermektedir.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Diyagram Morpheus Merkezi Olmayan sürümünü göstermektedir.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Topluluk
- Smart Agency - Morpheus kullanıcıları için kullanım senaryoları / aracılar oluşturan serbest geliştiriciler.
- Küresel Geliştirici Topluluğu - Büyüyen geliştirici, startup ve kullanıcı topluluğu.
- Topluluk, ETH sahiplerini Morpheus geliştiricilerine, hesaplama ve topluluğa verim bağışlamak için işe alıyor.
- Dağıtılmış Geliştirme Grubu - Morpheus Akıllı Sözleşmesini kodlamak için Akıllı Sözleşme Geliştiricileri.
- Morpheus Dapps - Kullanıcının Akıllı Aracısı ile Morpheus entegrasyonları için pazar yeri.
