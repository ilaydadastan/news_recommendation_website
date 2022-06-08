
const chunk = function (arr, chunkSize) {
 let R = [];
 for (let i=0,len=arr.length; i<len; i+=chunkSize)
  R.push(arr.slice(i,i+chunkSize));
 return R;
}

const createNewsRow = function (newsListByCategory) {
 let content = "";
 chunk(newsListByCategory, 4).forEach(function(newsList) {
  content += '<div class="row pb-5 mb-4">' + createNewsCategory(newsList) + "</div>";
 })
 return content;

}

const createNewsCategory = function(newsListByCategory) {
  return  newsListByCategory.map(function(news) {return createNewsDiv(news)}).join(' ');
}

const createNewsDiv = function (newsModel) {
 let newsTemplate = [
  '<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">',
  '<div class="card rounded shadow-sm border-0">',
  '<div class="card-body p-4">',
  '<img src="',
  newsModel.mainImage,
  '" alt="" class="img-fluid d-block mx-auto mb-3">',
  '<h5><a href="#" onclick="clickNewsDetail(' + newsModel.id +')" class="text-dark">',
  newsModel.title,
  '</a></h5>',
  '</div>',
  '</div>',
  '</div>'
 ]
 return newsTemplate.join(' ');
}

const updateQueryStringParameter = function (uri, key, value) {
 var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
 var separator = uri.indexOf('?') !== -1 ? "&" : "?";
 if (uri.match(re)) {
  return uri.replace(re, '$1' + key + "=" + value + '$2');
 }
 else {
  return uri + separator + key + "=" + value;
 }
}

const clickNewsDetail = function (newsId) {
 window.location.href = updateQueryStringParameter(window.location.href, "newsId", newsId).replace("recommend_news.html", "news_detail.html", "#",'');
}

const getNews = function () {
 return [
  {
   "id": 1,
   "title": "Jorge Jesus Kadıköy’de!",
   "publishDate": "01 Haziran 2022",
   "content": "Fenerbahçe'nin görüşmelere başladığını duyurduğu Portekizli teknik adam Jorge Jesus 9 yıl sonra geldiği Kadıköy'de tesisleri ve Fenerbahçe Müzesi’ni gezdi.",
   "category": "Spor",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/jrr_16_9_1654093066.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 2,
   "title": "Alex de Souza’dan Jorge Jesus paylaşımı",
   "publishDate": "01 Haziran 2022",
   "content": "Fenerbahçe'nin efsane futbolcusu Alex de Souza, sarı lacivertli kulübün teknik direktör Jorge Jesus'la anlaşması hakkında bir paylaşımda bulundu.",
   "category": "Spor",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/alex-de-souza-5_16_9_1654097917.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 3,
   "title": "İngiltere’de ‘Yılın Futbolcusu’ ödülü",
   "publishDate": "01 Haziran 2022",
   "content": "İngiltere'de Profesyonel Futbolcular Birliği Yılın Oyuncusu ödülü için 6 ay belirlendi. Listede 23 golle gol kralı olan Tottenham'ın yıldızı Heung Min Son'un olmaması futbolseverlerde şaşkınlık yarattı.",
   "category": "Spor",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/heung-min-son-3456456_16_9_1654104519.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 4,
   "title": "Hatayspor’da Serkan Özbalta dönemi",
   "publishDate": "01 Haziran 2022",
   "content": "Süper Lig ekiplerinden Hatayspor'un yeni teknik direktörü belli oldu.",
   "category": "Spor",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/serkan-ozbalta-34565_16_9_1654109177.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 5,
   "title": "Milliler halk plajındaki çöpleri topladı!",
   "publishDate": "01 Haziran 2022",
   "content": "A Milli ve eMilli Futbol Takımı oyuncuları, Riva'da anlamlı bir etkinliğe katıldı.",
   "category": "Spor",
   "mainImage": "https://i01.sozcucdn.com/wp-content/uploads/2022/06/01/resim3_20598073.jpg"
  },
  {
   "id": 6,
   "title": "Paul Pogba veda etti…",
   "publishDate": "01 Haziran 2022",
   "content": "İngiltere Premier Lig devi Manchester United, Fransız yıldız Paul Pogba ile yollarını ayırdığını açıkladı. Pogba'nın, yeniden Juventus'a transfer olması bekleniyor.",
   "category": "Spor",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/depophotos_17510789_16_9_1654082941.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 7,
   "title": "Gareth Bale, Real Madrid’den ayrıldı",
   "publishDate": "01 Haziran 2022",
   "content": "Galli futbolcu Gareth Bale, Real Madrid'den ayrıldığını açıkladı.",
   "category": "Spor",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/depophotos_17510789_16_9_1654082941.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 8,
   "title": "Hikmet Karaman ayrıldı",
   "publishDate": "01 Haziran 2022",
   "content": "Yukatel Kayserispor’da Hikmet Karaman dönemi sona erdi. Sarı-kırmızılı ekiple, Türkiye Kupası’nda final oynama başarısı yakalayan tecrübeli teknik adamın sözleşmesi dün itibarıyla sona erdi. ",
   "category": "Spor",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/hikmettkrman1_20595251_16_9_1654077476.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 9,
   "title": "Apple, iPad üretiminde yeni devir",
   "publishDate": "01 Haziran 2022",
   "content": "Apple, Şanghay gibi şehirlerde uygulanan karantinalardan sonra yaşadığı üretim kesintileri nedeniyle iPad üretimini ilk kez Çin'in dışına taşıyor.",
   "category": "Teknoloji",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/ipad-depophotos_16_9_1654093003.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 10,
   "title": "Uzmanların Sera Gazi Uyarısı",
   "publishDate": "01 Haziran 2022",
   "content": "İngiliz bilim insanları, sera gazını gidermek için karbon yakalamanın zor ve pahalı olduğunu söyleyerek emisyonların azaltılmasına odaklanılması gerektiğini belirtiyor.",
   "category": "Teknoloji",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/karbon-yakalama-reuters_16_9_1654067611.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 11,
   "title": "Kayıp insanların afişleri hareketleniyor",
   "publishDate": "01 Haziran 2022",
   "content": "Birleşik Krallık'ta kayıp kişilerin posterleri yeniden şekilleniyor. Afişlere bakanlarla daha iyi bağlantı kurmak amacıyla, pasif görsellerin yerini canlı portreler alıyor.",
   "category": "Teknoloji",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/26/iecrop/missing_people_16_9_1653559349.jpeg?w=776&h=437&mode=crop"
  },
  {
   "id": 12,
   "title": "Facebook kullanıcı sayısı 3 milyara yaklaştı",
   "publishDate": "01 Haziran 2022",
   "content": "2022 yılı ilk çeyreği itibarıyla dünyada aktif Facebook kullanıcı sayısı 2,93 milyar olurken, Facebook’un dünya çapındaki en büyük sosyal ağ olarak kayıtlara geçtiği görüldü.",
   "category": "Teknoloji",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/25/iecrop/facebook-iha_16_9_1653467355.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 13,
   "title": "ABD Kongresi uzaylıları tartışıyor",
   "publishDate": "01 Haziran 2022",
   "content": "Amerika Birleşik Devletleri Kongresi kısa süre önce ABD hükümetinin tanımlanamayan hava olayları (UAP'ler) ile ilgili bilgilerine ilişkin bir duruşma düzenledi.",
   "category": "Teknoloji",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/25/iecrop/ufo-reuters_16_9_1653460468.png?w=776&h=437&mode=crop"
  },
  {
   "id": 14,
   "title": "Bill Gates, Microsoft’un telefonunu kullanmıyor",
   "publishDate": "01 Haziran 2022",
   "content": "Bill Gates katlanabilir bir telefon kullanıyor, ancak Microsoft'un Surface Duo'su değil.",
   "category": "Teknoloji",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/23/iecrop/bill_gates-reuters1_16_9_1653308620.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 15,
   "title": "Google Translate’e 24 dil daha eklendi",
   "publishDate": "01 Haziran 2022",
   "content": "Google’ın çeviri platformu Google Translate’in listesindeki dil sayısı artıyor.",
   "category": "Teknoloji",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/12/iecrop/google-reuters_16_9_1652334757.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 16,
   "title": "Çin’de trilobit fosili bulundu",
   "publishDate": "01 Haziran 2022",
   "content": "Çinli bilim insanları, Çin'in güneybatısındaki Yunnan eyaletinin Zhenxiong ilçesinde Geç Ordovisyen dönemine ait trilobit topluluğu buldu.",
   "category": "Teknoloji",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/14/iecrop/fosil-depo_16_9_1652524778.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 17,
   "title": "e Okul ne zaman kapanıyor?",
   "publishDate": "01 Haziran 2022",
   "content": "Kapanış tarihi öğretmenlerin sınavları okuduğu tarihe göre farklılık gösteriyor, not girişlerinin karnelerin veriliş tarihinden birkaç gün önce kapatılacak.",
   "category": "Egitim",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/okullar-ne-zaman-kapanacak-shu-1_16_9_1632473582-880x495-1_16_9_1654075057.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 18,
   "title": "Uzman öğretmenlik başvurusu nasıl yapılacak?",
   "publishDate": "01 Haziran 2022",
   "content": "MEB, uzman öğretmen ve başöğretmen unvanları için Uzman Öğretmenlik Eğitim Programı ve Başöğretmenlik Eğitim Programı uygulayacak.",
   "category": "Egitim",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/ogretmen-shtr_16_9_1641560471_16_9_1654063712.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 19,
   "title": "YKS sınav yerleri belli oldu!",
   "publishDate": "01 Haziran 2022",
   "content": "YKS için sayılı günler kala sınav yerleri belli oldu. YKS'ye girecek öğrenciler, ÖSYM'nin ais.osym.gov.tr sayfası üzerinden sınav giriş yerlerini öğrenebilecek.",
   "category": "Egitim",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/01/iecrop/sinav_depo2_16_9_1643278806_16_9_1644916072_16_9_1654060081.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 20,
   "title": "Parlak zeka para edecek",
   "publishDate": "01 Haziran 2022",
   "content": "LGS puanıyla öğrenci alan gözde kolejler, yüzde 1’e girecek öğrencilere keseyi açtı. Yılda 100 ile 200 bin lira arasında değişen öğrenim ücreti hiç alınmayacak. Kitap, kıyafet, yemek, barınma bedava.",
   "category": "Egitim",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/06/31/iecrop/basliksiz-10_16_9_1654037179.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 21,
   "title": "LGS ne zaman, saat kaçta?",
   "publishDate": "01 Haziran 2022",
   "content": "Okul müdürlükleri bu tarihten itibaren öğrencilerinin sınav giriş belgelerini alacak ve mühürleyerek öğrencilere teslim edecek. LGS 5 Haziran günü gerçekleştirilecek. ",
   "category": "Egitim",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/31/iecrop/sinav_depo2_16_9_1643278806_16_9_1644916072_16_9_1653990231.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 22,
   "title": "Uzman öğretmenlik sınavı ne zaman?",
   "publishDate": "01 Haziran 2022",
   "content": "Öğretmenlik, adaylık döneminden sonra öğretmen, uzman öğretmen ve başöğretmen olmak üzere üç kariyer basamağına ayrılıyor. Uzman öğretmenlik ile başöğretmenlik programı başvurusu 1 Haziran - 10 Haziran tarihlerinde yapılacak.",
   "category": "Egitim",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/31/iecrop/uni-shutte_16_9_1651305914-1_16_9_1654003896.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 23,
   "title": "DGS geç başvuru günü!",
   "publishDate": "01 Haziran 2022",
   "content": "3 Temmuz tarihinde düzenlenecek olan Dikey Geçiş Sınavı başvurusunda son şans niteliği taşıyan DGS geç başvuru günü geldi. Ön lisanstan lisansa geçişte başarılı olunması gereken sınavın başvurusu geçtiğimiz günlerde sona erdi.",
   "category": "Egitim",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/31/iecrop/sinav-shutterstock-2_16_9_1630502548_16_9_1634735908_16_9_1653980138.jpg?w=776&h=437&mode=crop"
  },
  {
   "id": 24,
   "title": "Okullar ne zaman kapanıyor 2022?",
   "publishDate": "01 Haziran 2022",
   "content": "Okullar eylül ayından bu yana yüz yüze eğitime devam ederken, karneleri alarak 3 aylık tatile girecek. Yoğun sınav temposundan bunalan öğrenciler, “okullar ne zaman kapanacak” sorusunun cevabını sorguluyor.",
   "category": "Egitim",
   "mainImage": "https://i.sozcucdn.com/wp-content/uploads/2022/05/31/iecrop/ikinci-araritatil-okul-shutterstock_16_9_1653987115.jpg?w=776&h=437&mode=crop"
  }
 ];
};

$(document).ready(function() {
 history.replaceState({}, document.title, window.location.href.split('#')[0]);


 let newsByCategories = getNews().reduce(function(map, obj) {
  map[obj.category] = getNews().filter(function(i) {return i.category === obj.category});;
  return map;
 }, {});

 let content = "";
 Object.keys(newsByCategories).forEach(function (category) {
  content += createNewsRow(newsByCategories[category]);
 });
 $("#newsContent").append(content);




});