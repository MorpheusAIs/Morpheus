![Morpheuslogo](https://github.com/MorpheusAIs/Morpheus/assets/1563345/235b9c04-f3b1-4520-a328-2070c9c890ab)

# Morpheus
## Akıllı aracılara güç sağlayan bir ağ
### Yazarlar: Morpheus, Trinity и Neo
Yayınlandı - 2 Eylül 2023
Yellow Paper'a bağlantı Teknik Ayrıntılar: https://github.com/MorpheusAIs/Morpheus/blob/main/YellowPaper.md

## Giriş
Morpheus, "Smart Agents" olarak bilinen ilk eşler arası kişisel yapay zeka ağını katalize etmek üzere tasarlanmıştır. Kullanıcılara cüzdanlarına, uygulamalarına ve akıllı sözleşmelerine bağlanmaları için açık kaynaklı akıllı aracılar sağlamak, Web3 dünyasını herkese açmayı vaat ediyor.

Son olarak, ortalama bir kullanıcı Smart Agents ile normal bir dilde konuşabilir ve onun soruyu anlamasını ve niyetine/onayına göre bir eylemde bulunmasını sağlayabilir.  Bu an, Google'ın arama motorunun 1990'ların sonlarında kullanımı kolay web arayüzü sayesinde interneti halka açmasına benzemektedir.

Akıllı Ajanları herkes için erişilebilir kılmak ve altyapılarının merkeziyetsizliğini artırmak için Morpheus ağının geliştirilmesini öneriyoruz. Morpheus ağı, ağa katkıda bulunan dört ana unsuru da teşvik etmek için piyasaya sürülen bir token ("MOR" token) içerecektir. Yani, arayüzler oluşturan inşaatçılar topluluğu, Morpheus yazılımına/ajanlarına katkıda bulunan kodlayıcılar, likidite ekleyen sermaye sağlayıcıları ve hesaplama, depolama ve bant genişliği sağlayanlar. Bitcoin ve Ethereum'un geçmişi, kıt dijital tokenler için serbest ve açık rekabetin uzun süreler boyunca halka açık bir blok zinciri için ölçeklenebilir bir altyapı sağlayabileceğini göstermiştir.

![MorpheusNetworkDiagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/f0960e25-80e3-42ed-aa1f-ad9792eb672d)

## Bağlam ve tarihçe
OpenAI, Microsoft ve Google gibi yerleşikler, yakın kaynaklı büyük dil modelleri çalıştırıyor, müşterilerden lisans ücreti alıyor ve müşteri verilerinden para kazanıyor. Bu modeller sansürlü, kırılgan ve duvarlarla çevrili bahçelerde çalışıyor. Ücretsiz olarak sunulan açık kaynaklı büyük bir dil modeline yönelik güçlü bir talep var. Llama, Falcon ve diğer açık kaynaklı LLM'ler yakın zamanda piyasaya sürüldü ve hızla yakın kaynaklı rakiplerinin doğruluğuna yaklaşıyor.

Bu açık kaynaklı LLM'lerde şu anda eksik olan şey, kullanıcıların onlarla sohbet edebileceği standart bir grafik arayüz, geliştiriciler için bir API, cihazlar arasında hareket etmek için bir bulut çözümü ve kullanıcı verilerini ve kurtarma sürecini yönetmenin bir yoludur. Smart Agent Protokolü, yerel olarak çalışan ve kullanıcının Web3 wallet tarafından yönetilen açık kaynaklı bir LLM sağladığı için bu noktada devreye giriyor.

Bununla birlikte, yalnızca yerel yaklaşım hala geliştiricilerin üzerine inşa edebileceği bir API'den ve bir kullanıcı ağının, kullanıcının tam düğümü veya Smart Agent'ı yerel olarak indirmesine gerek olmayan hafif istemciler gibi kullanım durumlarını etkinleştirmek için yazılımı güçlü donanım üzerinde çalıştırabileceği bulut çözümünden yoksundur.

## Morpheus'a Girin
Morpheus bu API'leri ve merkezi olmayan bulut işlevlerini, Smart Agent topluluğuna bu halka açık blok zinciri altyapısını sağlayan kişileri ödüllendirmek için bir ağ ve bir token başlatarak sağlayacaktır. Akıllı Ajan Protokolünün bir uygulaması olarak Morpheus, açık kaynak tabanlı kişisel yapay zekaların günümüzde kapalı GPT modelleri sunan teknoloji şirketlerinin yetenekleriyle eşleşmesi ve daha da ötesine geçmesi için gereken kaynakları bir araya getirmeyi amaçlamaktadır.

Morpheus'un hemen birçok avantajı var. Web3'e özgü olması sayesinde kullanıcı kripto alıp satabilir, sabit coin gönderebilir, akıllı sözleşmelere erişebilir, bugün hiçbir LLM'nin bağlı olmadığı Dapps ve DeFi hizmetlerini kullanabilir. Merkezi şirketlerin karşılaştığı düzenleyici engeller, bu araçları kullanıcılara sunmalarını engellemektedir, bu nedenle modelleri görevler hakkında sohbet edebilir, ancak Web3 bağlamında kullanıcı adına hareket edemez. Merkezi olmayan kamu altyapısı üzerinde çalışmak, Chat GPT'ye her yeni kullanıcı için bir lisans ücreti ödemekten daha ucuzdur. 

Morpheus, yeni aracıları / LLM'leri hiçbir ücret ödemeden hızla kurabilmek isteyen geliştiriciler için Linux tipi bir alternatiftir. Kullanıcı kendi iş veya kişisel verilerinin sahipliğini koruyabilir. Bu sayede sızıntılar, hack'lenmeler ve rakiplerin saldırıları önlenir. Geliştiricilerin sadece Morpheus'a değil, aynı zamanda daha özel Ajanlar oluşturmak için koda katkıda bulunmalarını ödüllendirerek, kullanıcılar için App Store / Ajan Mağazası tipi bir deneyim geliştirilecektir. Kullanıcıya ait verilerin, yönlendirmelerin ve geçmişin kalıcılığı ile Akıllı Ajan Protokolü, LLM'ler ve Ajanlar dünyasında birlikte çalışabilirlik için en iyi çözüm haline gelir.

Son olarak, Morpheus'un grafiksel bir kullanıcı arayüzüne sahip olması ve Electron'dan yararlanarak tek tıklamayla kurulabilecek şekilde paketlenmesi, Morpheus'un ünlü "Friedl testini" geçen ilk açık kaynaklı yapay zeka olmasını sağlamıştır. Bu, bir yazılımın kullanım kolaylığının onu ilk olarak halkın teknik olmayan üyeleri için erişilebilir kıldığını ölçen bir eşiktir.

## Token Ödülleri ve Ekonomisi
Teklifimiz bunu bir Morpheus token ("MOR" sembolü) ile sağlamaktadır.
MOR her gün topluluğa %24, sermayeye %24, hesaplamaya %24 ve kodlayıcılara %24 oranında ödüllendirilir. 4'ü koruma fonları için.

Bu, Morpheus'un büyümesi için aşağıdakilere ihtiyacı olduğu gerçeğini yansıtmaktadır: 

Topluluk - Oluşturucular ön uçlar / araçlar yaratır ve kullanımları Morpheus ekosistemine getirir. 

Sermaye - Hesaplama ve kod için finansman sağlar. 

Hesaplama - Ekipman ve güç sağlar. 

Kodlayıcılar - Ön uçları, sermayeyi ve hesaplamayı kullanmak için zeka sağlar.

MOR Token Arzı, şimdiye kadar var olacak maksimum 42.000.000 token ile sınırlıdır. Dağıtım, dört grubun da ağa iş kanıtı (emek) ve Hisse kanıtı (sermaye) sağlayarak tokenleri kazanmasıyla başlayacaktır. Ön madencilik yok. Erken token satışı yok. Sadece adil bir lansman.

![MOREmissionsCurve2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/3514217c-50ed-4639-8c5d-87ca5cfb5d1b)

Blok ödülü günlük 14.400 MOR ile başlayacak ve daha sonra ödül 5.833. günde 0'a ulaşana kadar her gün 2,468994701 MOR azalacaktır. O zamana kadar (bundan yaklaşık 16 yıl sonra) Morpheus'un yaygın olarak kullanılması koşuluyla, ücretler birincil teşvik olarak devralmış olacaktır. Kullanıcılara verileri için ödenen ücretler, hesaplama sağlayıcılarına ödenen ücretler, sermaye sağlayıcılarına ödenen ücretler ve kodlayıcılara ödenen ücretler.

MOR tokenleri için **42 Milyon arz sınırı.** 
Günlük 14.400 token, topluluk kullanıcıları, sermaye, kod ve hesaplama arasında eşit olarak dağıtılır. 
- Hesaplama için 3.456 token. Sunulan API çağrıları için kanıt işlemleri. 
- Kod için 3.456 token. Kanıt kodu Morpheus reposuna işlendi ve birleştirildi. 
- Sermaye için 3.456 token. Proof stETH getirisi katkıda bulundu, %50'si MOR için takas edildi ve geri kalanı AMM'de Likidite Sağlayıcı olarak kilitlendi. 
- Topluluk için 3.456 token. Kullanıcıların ilgisini çeken ön uç uygulamaları ve araçları oluşturmanın kanıtı.
Geri kalanı koruma kaynakları için ayrılmıştır: Bu amaç için günlük 576 token.
![5050version3](https://github.com/MorpheusAIs/Morpheus/assets/1563345/c9fe763f-d4e4-4069-b9c9-75e0a777c3ad)

## MOR Token'ın Faydası
Amaç, MOR'un Morpheus ağının birçok işlevinde geniş bir fayda sağlamasıdır. Sonuç olarak, MOR token kullanımı, yazılımın gerçek kullanımına dayalı olarak ödülleri hesaplamak için zincir üzerinde bir muhasebe mekanizması sunar.

Geliştiriciler, yerel donanımın yürütebileceğinin ötesindeki işlevler için hesaplama sağlayıcılarına MOR öder. MOR, Akıllı Aracı Protokolünü kullanan merkezi olmayan uygulamalar için Morpheus API çağrıları için ödeme yapar. Kullanıcılar, geliştiriciler tarafından yayınlanan özel Ajanlar için MOR'a ödeme yapabilirler. Buna karşılık, geliştiriciler de yeni LLM'ler/Ajanlar için eğitim verileri için kullanıcılara MOR'a ödeme yapabilirler.

Tüm projeler geliştirme aşamalarından geçer. Başlangıçta ETH gibi likit kaynakların geliştiricilere ödeme yapmak ve ekipman için kullanılması önemlidir. Ethereum, blok zincirinin ilk kodlamasını ödemek için topluluklarından BTC aldığında aynı şeyi yapmıştır. Buradaki fark, Akıllı Aracı Protokolünün zaten geliştirilmiş olması ve Morpheus'un erişimini genişletmek için bir versiyon uyguluyor olmasıdır, bu nedenle proje hayata geçmeden önce bir kitle satışına gerek yoktur. MOR tokenleri yalnızca yazılım canlıya geçtikten sonra ödüllendirilecektir.

## Yakın vadeli: Lansman Anında
Sermaye - getiri sağlayan bir akıllı sözleşmede kilitli ETH (örneğin bir stETH Lido Staking sözleşmesinde ETH). stETH getirisinin %50'si bir AMM aracılığıyla düzenli olarak MOR'a takas edilir ve stETH getirisinin diğer %50'si Likidite Sağlayıcı olarak havuzda stETH olarak tutulur. Dolayısıyla Sermaye Katkıda Bulunanlar, AMM MOR / stETH havuzunun likiditesini zaman içinde artırmak için kabaca %50 MOR ve %50 stETH ekliyor.

- Sermaye, ETH getirilerinin değeri, katkıda bulunulan tüm ETH getirilerine karşı hesaplanacak ve MOR getirisi onlara orantılı olarak ödüllendirilecektir.
- Hesaplama, Hesaplama sağlayıcıları, yanıtladıkları kullanıcı istemleri için MOR alırlar. 
- Kodlayıcılar, Kodlayıcılar, Morpheus yazılımına yaptıkları ve birleştirilen katkılar için MOR alırlar.
- Topluluk, Topluluk oluşturucular, Morpheus ağına getirdikleri ön uçlar, araçlar, kullanım ve değer için MOR alırlar.

## Orta vadeli: MOR Daha Geniş Dolaşım Kazandıkça
- Sermaye, Blok ödülleri ve kazanılan ücretler arasında bir denge gelişir. 
- Hesaplama, Blok ödülleri ve kazanılan ücretler arasında bir denge geliştirin. 
- Kodlayıcılar, Blok ödülleri ve kazanılan ücretler arasında bir denge geliştirin. 
- Topluluk, Blok ödülleri ve kazanılan ücretler arasında bir denge geliştirin.

## Uzun vadeli: MOR Derin Likiditeye ve Güçlü Organik Talebe Sahip Olduğunda
- Sermaye, MOR tokenine ETH likiditesi sağlama ücretleri, ödüllerinin çoğunluğunu sağlayacaktır.
- Hesaplama, Hesaplama sağlayıcılarına ödenen ücretler, ödüllerinin çoğunluğunu oluşturacaktır.
- Kodlayıcılar, Kodlayıcılara giden ücretler ödüllerinin çoğunluğunu oluşturacaktır.
- Topluluk, Kullanıcılar tarafından ödenen ücretler ödüllerinin çoğunluğunu oluşturacaktır.

Bunun bir zaman çizelgesi olmadığını unutmayın. Aksine her aşama yaşam döngüsünün bir kısmının açıklamasıdır. Topluluğun her aşamada büyümesi ve olgunlaşması yıllar alabilir ve blok ödülü yaklaşık 16 yıl sonra sona erer. Bu uzun dağıtım programı, tokenların küresel olarak çok geniş bir temelde ödüllendirilmesi için zaman vermeyi amaçlamaktadır. Ayrıca, uzun yıllar boyunca blok ödüllerindeki yumuşak günlük düşüş, tüm katılımcılara ölçeğe ulaşma ve erken sübvansiyonlu ödüllerden yalnızca kazandıkları ücretlerle faaliyet göstermeye geçiş yapma zamanı verir.

![MOREmissionSchedule](https://github.com/MorpheusAIs/Morpheus/assets/1563345/94c96cb0-b6e4-4c63-be46-39088c91e168)

## MOR'un Kuyruk Emisyonları
Bitcoin'in lansmanından bu yana insanlar "blok ödülleri nihayet durduğunda ne olacak?" sorusunu tartışıyor. Morpheus bağlamında bu yararsız tartışmadan kaçınmak ve yeni kodlayıcıları, topluluğu, bilgi işlem ve sermaye sağlayıcılarını gelecekte de hizalamaya devam etmek için, MOR tokenlerinin bir "kuyruk emisyonunu" öneriyoruz. Bu MOR kuyruk emisyonu, dağıtım programının 5.833. gününde son MOR tokenlerinin yayılmasından sonra başlayacaktır.
 
Kuyruk emisyonu, son 5.833 gün içinde yakılan MOR token sayısı incelenerek ve kuyruk emisyon değeri yakılan miktarın %50'si olarak ayarlanarak hesaplanacaktır. Bu kuyruk emisyon değeri bir sonraki 5.833 günlük dönemde yayılacaktır. Ancak hiçbir durumda kuyruk emisyonu o sırada dolaşımda olan MOR'un %16'sından fazla olmayacaktır. 
 
Örneğin, ilk 5.833 gün boyunca MOR tokenlerinin ortalama %25'i yakılmışsa, ilk emisyon programı sırasında 10.500.000 MOR yakılmış olacaktır. Daha sonra %50 kuyruk emisyon değerini uygulayarak ikinci 5.833 günlük dönemde 5.250.000 MOR'un ödüllendirilebileceğini hesaplarız. Bu da dolaşımda kalan 31.500.000 MOR'un yaklaşık %16,6'sına denk gelmektedir. Buna göre, bu miktar ikinci 5.833 günlük dönemde ödüllendirilmek üzere 5.040.000 MOR'a (dolaşımdaki tokenlerin %16'sı) veya günde ~864 MOR'a düşürülecektir.
 
İkinci 5.833 günlük dönem tamamlandıktan sonra bu süreç tekrarlanacaktır. Kuyruk emisyonu, son 5.833 gün içinde yakılan MOR token sayısı incelenerek ve kuyruk emisyon değeri yakılan miktarın %50'si olarak ayarlanarak yeniden hesaplanacaktır. Bu kuyruk emisyon değeri bir sonraki 5.833 günlük dönemde yayılacaktır. Ancak hiçbir durumda kuyruk emisyonu o sırada dolaşımda olan MOR'un %16'sından fazla olmayacaktır. 
 
Örneğin, yine ikinci dönemde MOR tokenlerinin %25'i yakıldıysa, bu ikinci emisyon programı sırasında 9.135.000 MOR yakıldığı anlamına gelir. O halde üçüncü 5.833 günlük dönemde 4.567.500 MOR ödüllendirilebilir. Ancak, bu sayı dolaşımda kalan 27.405.000 MOR'un %16'sından fazla olduğundan, yıllık %1'lik ödüllere (dolaşımdaki tokenlere göre) uyum sağlamak için 4.384.800 MOR'a düşürülecektir.
 
Bu süreç gelecekte de sonsuza kadar tekrarlanacaktır.
 
Uzun vadeli sonuç. Yıllık MOR ödüllerinin yaklaşık %1'i (o sırada dolaşımda olan MOR sayısına göre) gelecekteki kodlayıcılar, hesaplama, topluluk ve sermaye için kullanılabilir olacaktır.

![MaxMORScenario25](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/81c7794a-b5bc-4a9e-bb2d-1f28b98ea079)

**ÖNEMLİ NOT:** Bu, 42 Milyon MOR'luk sert Arz Sınırının doğasını değiştirmez. 
Kuyruk emisyon programı tanımı gereği yakılan MOR tokenlerinin yalnızca bir kısmı olduğundan, MOR tokenleri her 5.833 günlük dönemde daha da kıt hale gelebilir.

![MOR25ScenarioV9](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/4813cd02-b104-4a0c-893b-a7fd329fe2a3)

Aşağıda, ilk 5.833 günlük dönemi gösteren ve 17. yıldan 256. yıla kadar olan uzun kuyruk emisyonlarını ekleyen birleşik MOR Arz Eğrisi gösterilmektedir. Çağlar boyunca ortalama %25 MOR yanma oranı örneğini varsayarsak.

![MORSupplyCurve20231019](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/8994c389-dad1-4e46-9b63-e048da8ef172)

## Proof of Community, Code, Compute & Capital
Morpheus tam düğümü bir cüzdanla birlikte gelir veya kullanıcı mevcut cüzdanını bağlayabilir. Bu, kullanıcının Akıllı Aracıları tarafından önerilen işlemleri imzalamasını ve göndermesini sağlar. Böylece kullanıcılar Morpheus yazılımı aracılığıyla ispatlara katılabilecektir. Ancak Sermaye Sağlayıcıların örneğin tam bir node'a sahip olmaları gerekmez. Ethereum / Arbitrum üzerindeki Akıllı Sözleşmelerle stETH kullanarak doğrudan etkileşime girebilirler.

## Sermaye Kanıtı ve Ödül:
Bir Sermaye Sağlayıcının tanımı, Morpheus ağına Protokole Ait Likidite haline gelen stETH getirisi sağlayan kişidir. Bu Sermaye Sağlayıcı Akıllı Sözleşme, Morpheus takas işlevine üretilen stETH veriminin %50'sini sağlayacaktır. Takas, MOR tokenlerini bir Otomatik Piyasa Yapıcıdan (AMM) satın alır ve ardından AMM havuzuna ekler ve stETH getirisinin diğer %50'si Likidite Sağlayıcı olarak AMM'ye kilitlenir. Bu, tüm kodlayıcılara, topluluk üyelerine ve hesaplama sağlayıcılarına likidite sağlayacaktır. 

Yatırdığınız paradan elde edilen tüm stETH getirisi protokole ait likiditeye (PoL) dönüştürülür. Getiri süresiz olarak PoL olarak kalır, ancak stETH'inizi istediğiniz zaman çekebilirsiniz.

Sonuç olarak, Sermaye Sağlayıcı her gün katkıda bulunduğu toplam stETH getirisiyle orantılı olarak MOR tokenleri alacaktır. Örneğin, ağın başlatıldığı 1. günde her biri 1 stETH getiriye katkıda bulunan 100 Sermaye Sağlayıcı varsa, her biri her gün 3.456 MOR tokeninin %1'ini = 34,56 MOR alır.

Bu getiri katkısı, takas ve likidite ekleme sürecinin "TCM" olarak adlandırılması önerilmiştir. E/acc filozofu Beff Jezos'un onuruna "tekno-sermaye makinesi "nin kısaltması. 

## Kod Kanıtı, Kayıt ve Ödül:
Kodlayıcı tanımı, Morpheus tam düğümünü indiren, cüzdanını bağlayan ve Morpheus Ağına bir aracı, akıllı sözleşme veya başka bir yazılım ekleyen kişidir.

Kodlayıcı, aracılarını / akıllı sözleşmelerini veya yazılımlarını kaydetmek için Kodlayıcı Akıllı Sözleşmesine bir MOR işlemi gönderecektir. 
Kodlayıcı, işlemin notuna aşağıdaki meta verileri ekleyecektir. 
- A. Kayıt olurken MOR işleminin not alanında yazılımlarının uç noktasına bir IPFS bağlantısı. 
- B. Geliştiricilerin uygulama sürümlerini imzalamasına/doğrulamasına benzer bir kriptografik imza.
- C. Yazılımın sürüm numarası.
- D. Programın durumunun bir karması, böylece kullanıcılar bunun geçerli ve değiştirilmemiş bir kopya olduğunu kontrol edebilir.

Morpheus kod tabanına katkıda bulunanlar, katkıda bulunulan Tam Zaman Eşdeğeri (FTE) çalışma ile ölçüldüğü üzere, depoda yapılan tüm kümülatif geliştirme ile orantılı olarak ödüllendirilir. Örneğin, ağ başlatıldığında her biri TZE süresinin %10'una katkıda bulunan 10 kodlayıcı varsa, her biri her gün 3.456 MOR jetonunun %10'unu = 345,6 MOR alır. Bu hesaplama, Morpheus yazılımının mevcut ana ağ sürümünün kümülatif TZE zaman katkılarına dayalı olarak her ay güncellenir.

Morpheus ile birlikte çalışabilen özel ajanlar, araçlar veya zincirler (bir LLM'ye yapılan istemler/çağrılar dizisi) ortaya çıktığında, ödüllerin yarısı (%50) bunların geliştiricilerine gidecektir. Ödül, bu aracıların kullanımıyla orantılı olarak hesaplanacaktır. Örneğin, her biri Morpheus ağındaki aracı kullanımının %10'unu oluşturan 10 aracı inşa eden 10 geliştirici varsa. Morpheus akıllı sözleşmesi bu kullanım istatistiklerini MOR işlemleri aracılığıyla hesaplayacaktır. Daha sonra Morpheus yazılım kodlayıcıları MOR ödülünün %50'sini kazanacak ve özel bir aracı geliştiren her bir geliştirici tokenlerin %5'ini alacaktır = bu örnekte geliştirici başına 172,8 MOR.

Bu "Katkı Kanıtı" alanında yapılan öncü araştırmaların büyük bir kısmı TEA Protokolündeki iyi insanlar tarafından yapılmıştır. Home Brew'un geliştiricisi Max Howell da buna dahil. Ayrıntıları içeren makaleye bağlantı. Morpheus 2024'teki lansmanından sonra TEA'dan yararlanmayı düşünebilir.

## Hesaplama Kanıtı, Kayıt ve Ödül:
Bir Hesaplama sağlayıcısının tanımı, Morpheus tam düğümünü indirmiş, cüzdanlarını bağlamış ve diğer Morpheus kullanıcılarından API / LLM / Hesaplama istekleri almaya hazır olmalarıdır. Sağlanan Hesaplama, Smart Agent tarafından oluşturulan imzalı bir işlemin MOR işleminden elde edilen çıktının geri dönüşüne dahil edilmesiyle hesaplanabilir.

Hesaplama Sağlayıcısı, istekleri almak üzere API uç noktasını kaydetmek için Hesaplama Sağlayıcısı Akıllı Sözleşmesine bir MOR işlemi gönderecektir. 
Hesaplama Sağlayıcısı, işlemin notuna aşağıdaki meta verileri ekleyecektir. 
- A. Kayıt olurken MOR işleminin not alanına kendi API uç noktalarına bir IPFS bağlantısı. 
- B. Geliştiricilerin uygulama sürümlerini imzalamasına/doğrulamasına benzer bir kriptografik imza.
- C. Kullandıkları Morpheus yazılımının sürüm numarası.
- D. Programın durumunun bir karması, böylece kullanıcılar bunun geçerli ve değiştirilmemiş bir kopya olduğunu kontrol edebilir.

Her bir Hesaplama Sağlayıcısı tarafından yakılan orantılı MOR işlem ücretleri, Hesaplama Sağlayıcılarının statüsünün kanıtı olarak hizmet eder ve her gün MOR tokenlerinin bir kısmını kazandırır. 

Örneğin, ağın başlatıldığı 1. günde 100 Hesaplama Sağlayıcısı varsa, her biri ücretler yoluyla yaktıkları MOR miktarına bağlı olarak orantılı bir ödül alır. Bu durumda, 100 hesaplama sağlayıcısının her birinin 100 MOR yaktığı varsayılırsa, her gün 3.456 MOR tokeninin %1'i = 34,56 MOR.

Hesaplama taleplerini almaya hak kazanmak için bir Hesaplama Sağlayıcısının adresinin MOR tokenlarını HODL etmesi gerekir. Talepler, diğer tüm kayıtlı Hesaplama Sağlayıcılarına kıyasla HODL ettikleri MOR ile orantılı olarak Hesaplama Sağlayıcıları API'sine yönlendirilecektir.

## Topluluk Oluşturucu Kanıtı, Kayıt ve Ödül:
Bir Topluluk Oluşturucunun tanımı, Morpheus tam düğümünü indirmiş, cüzdanlarını bağlamış ve kullanıcı ön uçları ve geliştirici araçları sağlamak için Morpheus API'sini kullanıyor olmalarıdır. Sağladıkları katkılar, Smart Agent tarafından oluşturulan imzalı bir işlemin MOR işleminden elde edilen çıktının geri dönüşüne dahil edilmesiyle hesaplanabilir.

Topluluk Oluşturucu, istekleri almak üzere API uç noktasını kaydetmek için Topluluk Oluşturucu Akıllı Sözleşmesine bir MOR işlemi gönderecektir. 
Topluluk Oluşturucu, işlemin notuna aşağıdaki meta verileri ekleyecektir. 
- A. Kayıt olduklarında MOR işleminin not alanında bir uç nokta aracılığıyla ön uçlarına veya araçlarına bir IPFS bağlantısı. 
- B. Geliştiricilerin uygulama sürümlerini imzalamasına/doğrulamasına benzer bir kriptografik imza.
- C. Kullandıkları Morpheus yazılımının sürüm numarası.
- D. Ön uç / aracın durumunun bir karması, böylece kullanıcılar geçerli ve değiştirilmemiş bir kopya olup olmadığını kontrol edebilir.

Her Topluluk Oluşturucu tarafından yakılan orantılı MOR işlem ücretleri, Topluluk Oluşturucunun statüsünün kanıtı olarak hizmet eder ve her gün MOR tokenlerinin bir kısmını kazandırır. 

Örneğin, ağın başlatıldığı 1. günde 100 Topluluk Oluşturucu varsa, her biri ücretler yoluyla yaktıkları MOR miktarına bağlı olarak orantılı bir ödül alır. Bu durumda, 100 Topluluk Kurucusunun her birinin 100 MOR yaktığı varsayılırsa, her gün 3.456 MOR tokeninin %1'i = 34,56 MOR.

## Morpheus Kullanıcı Diyagramı
![UpdatedDiagram2UserFlow](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a02468a7-9284-4ce5-b7e3-f32f476ff9f1)

## Morpheus Ödülleri Ethereum Katman 2 Üzerinde Akıllı Sözleşme ile Teslim Ediliyor 
Morpheus Tokenları (MOR) ilk olarak Ethereum Katman 1'de verilecek ve ödemeler ve diğer MOR yardımcı programı ile ilgili eylemler amacıyla Arbitrum'da bulunan bir sarılmış MOR jetonu (wMOR) olacaktır.

Morpheus'un Ethereum ve 2. katman Arbitrum üzerine inşa edilmesi sayesinde dağıtılmış bir defter üzerinde blok zinciri mutabakatı veya işlem yürütme için MOR ödüllerini ayırmasına gerek olmadığını unutmayın. 

MOR sahipleri, MOR Akıllı Sözleşmelerine bir işlem gönderebilecek ve MOR ödüllerini istedikleri zaman talep edebileceklerdir. Ayrıca stETH'lerini istedikleri zaman çekebilirler.

## Morpheus'ta Ücretleri Serbest Piyasa Belirliyor
En iyi sistemler en az sayıda sihirli sayı seçer ve bunun yerine serbest piyasanın mümkün olduğunca çok sayıda değişkene karar vermesine izin verir. Ücretler bunun harika bir örneğidir. Morpheus, keyfi bir ücret belirlemek yerine bu rakamları kullanıcılara, geliştiricilere, sermayeye ve işlem sağlayıcılarına bırakır. Örneğin, bir hesaplama sağlayıcısı LLM'leri için 1.000 dil tokenı başına 0,02 $ fiyat teklif edebiliyorsa ve bir kullanıcı bunu ödemeye karar verirse, o zaman pazarın ödemeye istekli olduğu şey budur. Hesaplama hızlandıkça fiyatların değişmesi muhtemeldir ve bu nedenle bu ve diğer değişkenleri Morpheus yazılımını kullananlara bırakmak daha iyidir.

Hesaplama Ücretleri
Kullanıcılar ve hesaplama sağlayıcısı tarafından belirlenen ücret miktarı. Her ücretle hesaplama ve yakma MOR tokenlerini ödeme seçeneği. Zaman içinde gelişecek açık pazar. Konsensüs veya ayrıcalıklı düğümler yerine hesaplama için ücretsiz pazar yeri.

Kod / Ajan Zekası için Ücretler
Kodlayıcı tarafından belirlenen ve kullanıcı tarafından kabul edilen ücret miktarı. Ücret ödeme ve her ücretle MOR token yakma seçeneği. Zaman içinde gelişecek açık pazar. Görevler üzerinde fikir birliği yerine kod için ücretsiz pazar yeri.

Sermaye için Ücretler
LP tarafından belirlenen ve kullanıcı tarafından kabul edilen ücret miktarı. Ücret ödeme ve her ücretle MOR tokenlerini yakma seçeneği. Zaman içinde gelişecek açık pazar. Hazine üzerinde mutabakat yerine sermaye için serbest pazar yeri.

## Kullanıcı Topluluğu İçin Ücretler
Kullanıcılar tarafından belirlenen ve veri alıcısı tarafından kabul edilen ücret miktarı. Ücret ödeme ve her ücretle MOR tokenlerini yakma seçeneği. Zaman içinde gelişecek açık pazar. Veriler için ücretsiz pazar yeri.

Tüm ücretler, kullanım arttıkça sistemde doğal talep yaratan yerel MOR tokenleri ile ödenir.

## Dürüst Temsilcileri Teşvik Etmek ve Hata Durumunda Kayıpları Onarmak İçin Ücretlerin Kullanımı
Morpheus ağında MOR & ETH'nin bir diğer önemli kullanımı da Akıllı Aracı / Akıllı Sözleşme arızaları durumunda kullanıcıları tazmin etmek olacaktır. Ekonomik kaynaklarla desteklenen bir itibar oluşturmanın, Akıllı Aracılara olan güveni artırmanın ve ortaya çıkan hataları, hataları ve diğer sorunları ele almak için bir finansman kaynağına sahip olmanın anahtarı olacağına inanıyoruz. 2010'da Bitcoin'de meydana gelen büyük bir hata ve bunun sonucunda oluşan hard fork'un ardından, Gavin Andresen adlı ilk çekirdek geliştiricilerden biri, hard fork nedeniyle ödüllerini kaybeden madencilere Bitcoin ödemek için adım attı. Bu eylem önemliydi ve hard fork'u hızla çözdü ancak geçici bir çözümdü.

Yazılımın asla mükemmel olmadığını önceden kabul etmek ve koddaki bir hatadan etkilenenlere geri ödeme yapmak için MOR kaynaklarının %4'ünü ayırmak. Morpheus geliştirici topluluğu, bir hata veya hatanın bir kullanıcı, hesaplama sağlayıcısı veya sermaye sağlayıcısı üzerinde ekonomik bir etkiye sahip olduğunu anlamak için bir kehanet görevi görecektir. Önceden tanımlanmış bir dizi hata, Morpheus Akıllı Sözleşmesindeki veya yerel kurulumdaki hataları içerecek şekilde bu kaynaklar tarafından kapsanacaktır.

Daha geniş bir koruma için, Nexus Mutual ya da benzeri bir akıllı sözleşme / merkezi olmayan koruma ağı ile entegrasyon, Morpheus Aracı Mağazasına dahil olmak isteyen ya da SmartContractRank algoritması tarafından daha iyi sıralanan aracılar / akıllı sözleşmeler ile uç durumları kapsayacak şekilde düşünülebilir.

## Kalıcılık için Depolama ve Kurtarma için Cüzdanlar
Kişisel verileri Morpheus ağının kendisinde depolamak yerine, ki bu maliyet engelleyici ve merkezileştirici bir güç olacaktır, bireyler verilerine, istemlerine ve cüzdanlarına erişimi kontrol eden özel anahtarlara sahip olacaklardır. Verilerin kendisi IPFS standardı ve merkezi olmayan uzun vadeli depolama için Filecoin ağı kullanılarak saklanacaktır. Verim için Filecoin EVM ve DeFi'den yararlanarak kalıcı bir yinelenen depolama düzenlenebilir. Alternatif olarak, kullanıcılar depolama için yıllık ENS tarzı ödeme yapabilirler. Yaklaşım ve özel Web3 cüzdanını, kullanıcı bilgisayarları veya telefonları değiştirdikçe bu verilerin farklı cihazlara taşınması / kurtarılması için anahtar olarak tutmak.

## Morpheus Teknoloji Yığını, Akıllı Sözleşme ve Geliştirme
Akıllı Aracı Protokolünün Morpheus uygulaması, mevcut yerel olarak çalıştırılan reponun doğrudan bir çatalı olacaktır. En önemli değişiklik, SmartContractRank'i MOR token bilgisini ve bir Akıllı Aracılar ağını güçlendirmedeki işlevlerini içerecek şekilde güncellemek olacaktır.

Morpheus MOR tokenı, değiştirilebilir tokenlar için ERC20 standardı aracılığıyla Ethereum üzerinde bir Akıllı Sözleşme olarak geliştirilmektedir. Akıllı sözleşmelerin çoğu Ethereum üzerindedir ve Ethereum Sanal Makinesi Web3 alanının ortak dili haline gelmiştir. Günlük ödüllerin gönderilmesine yönelik gaz ücretlerinin maliyetini azaltmak için Ethereum'un Arbitrum adı verilen 2. katmanından yararlanacağız.

Ethereum blok zincirinin seçilmesinin, ETH stake etme gibi zincir eylemlerinin yalnızca aynı zincir üzerinde çalışan bir akıllı sözleşme tarafından doğrulanabileceği göz önüne alındığında en iyi başlangıç yeri olduğuna inanıyoruz. Buna ek olarak, ENS alanları veya Ethereum genel adresleri aracılığıyla kodlamanın zincir üzerinde doğrulanması, katkıda bulunan kodu, onu sağlayan kodlayıcının cüzdanına bağlamanın başka bir yolunu ekler. Morpheus Akıllı Sözleşmesinin günlük olarak erişebileceği bir kayıt.

Ayrıca, ölçeklenebilirlik ve gizlilik için sıfır bilgi kanıtları birçok kullanım durumu için kilit öneme sahiptir. Dolayısıyla, ilk günden bu yeteneklerle başlamak Akıllı Aracı topluluğunu gelecek için en iyi konuma getirecektir. Arbitrum, çoğu zaten yayında olan ZK teknolojisini ekleme sürecindedir.

Yakın vadede, bu teknoloji yığını seçimi, Morpheus'u doğrudan Ethereum'un 1. katman güvenliğinde, ikinci katmanın daha düşük gaz maliyetleriyle güvence altına alıyor. Orta vadede bu seçim, Morpheus'u diğer Ethereum katman 2'lere ve EVM uyumlu blok zincirlerine genişletmek için de bir yol sağlar.

Halka açık blok zincirleri arasında birlikte çalışabilirlik geliştikçe Morpheus, çeşitli EVM / solidity uyumlu geliştirici toplulukları genelinde tüm Web3 AI Agent oluşturucularına hizmet vermeye çalışacaktır. Arbitrum, Polygon, OP Stack, Base, Arbitrum, Avalanche, Polkadot, Solana, Filecoin ve Cosmos'ta benzer vizyon ve değerleri paylaşan güçlü geliştirici topluluklarının farkındayız. Morpheus bugün ancak bu zincirlerin birçoğunda geliştiriciler tarafından oluşturulan araçlar sayesinde mümkündür.

## Kullanıcı Veri Güvenliği
Morpheus eşler arası Hesaplama Sağlayıcıları ağına istemler gönderirken özel verilerin sızmasını önlemek için yazılım, Büyük Dil Modellerinin Tam Homomorfik Şifreleme (FHE) sürümleri yayınlandıkça bunlardan yararlanmaya çalışmalıdır. Ayrıca 2024/2025 yıllarında FHE için donanım hızlandırmanın ortaya çıkmasıyla birlikte, bu hesaplama için maliyetlerin düz metin işleme ile eşit seviyeye ulaşacağı tahmin edilmektedir.
 
- LLM örneği https://huggingface.co/blog/encrypted-llm 
- EVM örneği https://www.fhenix.io/

## Ağ Ortaya Çıkıyor ve 90 Günlük Bir Bootstrapping Dönemi

Morpheus Ağı, 0.0.1 yerel kurulum sürümüyle başlar, ardından MOR token akıllı sözleşmeleri ve ardından tam düğüm yazılımı ile devam eder.

MOR'un ödüllerini hesaplayan akıllı sözleşmeler, bir ana ağa dağıtılmadan önce bir test ağı aracılığıyla kapsamlı bir şekilde test edilmelidir.

Ayrıca, ana ağın ödülleri hesaplamaya başladığı zaman ile bu MOR tokenlerinin kullanıcılar tarafından talep edilebilir / gönderilebilir olduğu zaman arasında bir kerelik 90 günlük bir gecikme (önyükleme dönemi olarak bilinir) olacaktır. Bu önyükleme dönemi, ağın faydalı işlevlerini yerine getirmek için yeterli MOR tokeninin dolaşıma hazır olmasını sağlayacaktır. 

AMM'yi başlatmak için, koruma fonlarına tahsis edilen MOR tokenlerinin %4'ü (90. güne kadar 51.444 MOR) bu amaç için kullanılacaktır. 

Bu adımlar, ana ağda 91. günün başında 1.286.111 MOR'un talep edilebilir olmasını sağlayacak ve böylece Zcash'in lansmanında olduğu gibi, madencilik günü 1'den itibaren yalnızca birkaç tokenin ilk kez mevcut olduğu aşırı token kıtlığını önleyecektir. Bu sorun, piyasanın bir dengeye ulaşmasını ve rasyonel fiyat keşfi yapmasını haftalar almıştır. Morpheus, bu 90 günlük önyükleme dönemi ile bu sorunu önler, böylece token arzını, faydasını yerine getirmek ve rasyonel fiyat keşfi oluşturmak için yeterli token ile hazırlar.

MOR tokenları talep edilebilir ve gönderilebilir hale geldiğinde Morpheus Ağı, MOR işlemlerinin API çağrıları, özel aracılar için ödeme yapmasını ve ağdaki katılımcıların Payını doğrulamasını sağlayabilir.

## Sonuç
Tarihte önemli bir anın eşiğindeyiz. Morpheus ile herkes kendileriyle birlikte düşünebilen ve kendilerine fayda sağlayacak eylemlerde bulunabilen güçlü bir kişisel yapay zekaya sahip olacak. Kişisel bilgisayar ve arama motorunun bireyi güçlendirdiği gibi, bugün kişisel YZ'lerle de aynı fırsata sahibiz. Akıllı Ajan Protokolü, LLM'ler, Ajanlar ve Web3 ile doğru yetenek karışımını bir araya getirmektedir. Morpheus, bu yetenekleri Akıllı Ajanların kitlesel dağıtımını ve kullanımını hızlandırabilecek bir kamu ağına genişletmektedir.

AGI'nin gelişinden en iyi sonuçları elde etmenin yolunun teşviklerin ekonomik olarak uyumlaştırılmasından geçtiğine inanıyoruz. Herkes için açık kaynaklı, izinsiz ve özgür bir geleceği güvence altına almamıza yardımcı olun. 

_______________________
## Teklifin İçeriği:

Morpheus adlı bir geliştiriciden 2 Eylül 2023 tarihinde yukarıdaki teklifi içeren bir e-posta aldım.

_______________________
David,

Aşağıda "Morpheus - Akıllı Ajanları Güçlendirmek İçin Bir Ağ" başlatmak için bir teklif bulabilirsiniz.

Makale, token ekonomisini, teknoloji yığınını ve topluluğu, kodlayıcıları, sermaye ve hesaplama sağlayıcılarını tokenlerle adil bir şekilde ödüllendirmek için kanıtları hesaplama araçlarını ortaya koymaktadır.

Bu makale Akıllı Ajan topluluğuna ücretsiz olarak verilmiştir ve kamu malıdır.

Zihninizi özgür bırakın.

Morpheus

--------------------------------------------------------------------
