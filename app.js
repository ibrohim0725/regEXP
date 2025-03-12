// Mana, RegExp mavzusi bo’yicha bir nechta masalalar. Ularni hal qilish orqali o’rganganlaringni mustahkamlashing mumkin. Masalalar oson, o’rta va qiyin darajalarda berilgan.

// Oson daraja:

// 	1.	Masala: Faqat raqamlarni ajratish
// 	•	Shart: Berilgan matndan faqat raqamlarni ajratib ol.
// 	•	Input: "Men 25 yoshdaman, 2025 yil"
// 	•	Output: "25 2025"

let strAge = "Men 25 yoshdaman, 2025 yil";
console.log(strAge.match(/\d/g).join(""));

// 	2.	Masala: Faqat harflarni ajratish
// 	•	Shart: Berilgan matndan faqat harflar (lotin alifbosidagi kichik va katta harflar) ajratib ol.
// 	•	Input: "Salom123 DUNYo!"
// 	•	Output: "SalomDUNYo"

let str1 = "Salom123 DUNYo!";
console.log(str1.match(/\w[A-Za-z]+/g).join(""));

// 	3.	Masala: Gapni bosh harf bilan boshlash
// 	•	Shart: Berilgan matnni boshidagi birinchi harfni aniqlab, agar u kichik harf bo’lsa, katta harfga almashtir.
// 	•	Input: "salom dunyo"
// 	•	Output: "Salom dunyo"
let str2 = "salom dunyo";
let res = str2.replace(/^\w/, (match) => match.toUpperCase());
console.log(res);

// 	4.	Masala: Faqat bo’sh joylarni sanash
// 	•	Shart: Berilgan matndagi bo’sh joylar sonini aniqlang.
// 	•	Input: "Bu yerda 5 ta bo'sh joy bor."
// 	•	Output: 5
let str3 = "Bu yerda 5 ta bo'sh joy bor.";
let space = str3.match(/ /g);
console.log(space.length);

// 	5.	Masala: E-mail validatsiya qilish
// 	•	Shart: E-mail manzilining to’g’ri formatdaligini tekshiruvchi RegExp yarating.
// 	•	Input: "test@domain.com"
// 	•	Output: true (e-mail formatida bo’lsa) yoki false (bo’lmasa)
let mail = "test@domain.comms";
let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
console.log(regex.test(mail));

// 	6.	Masala: Faqat katta harflarni ajratib olish
// 	•	Shart: Berilgan matndan faqat katta harflarni ajratib ol.
// 	•	Input: "Web DEVELOPER"
// 	•	Output: "WDEVELOPER"
let str4 = "Web DEVELOPER";
console.log(str4.match(/[A-Z]/g).join(""));

// O’rta daraja:
// 	1.	Masala: Telefonda raqamlarni formatlash
// 	•	Shart: Berilgan telefon raqamin ni (raqamlar ko’rinishida) standart formatga keltiring (XXX-XXX-XXXX).
// 	•	Input: "998901234567"
// 	•	Output: "998-901-2345"
let numbers = "998901234567";
let numFormat = numbers.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-");
console.log(numFormat);

// 	2.	Masala: Raqam va harflarni ajratish
// 	•	Shart: Berilgan matndan harflar va raqamlarni ajratib, ularni alohida qaytaring.
// 	•	Input: "abc123xyz456"
// 	•	Output: "abcxyz 123456"
let nums = "abc123xyz456";
let nums2 = nums.match(/\d/g).join("");
let str = nums.match(/[A-Za-z]+/g).join("");
let result = str + " " + nums2;
console.log(result);

// 	3.	Masala: Bir xil ketma-ket takrorlangan belgilarni olib tashlash
// 	•	Shart: Berilgan matndagi ketma-ket takrorlangan harflarni bitta qilib qaytaring.
// 	•	Input: "aaabbbcccaaa"
// 	•	Output: "abc"
let letters = "aaabbbcccaaa";
let chekLetter = letters.match(/(.)\1*/g);
if (chekLetter) {
  chekLetter = chekLetter.map((el) => el[0]);
  chekLetter = [...new Set(chekLetter)].join("");
}
console.log(chekLetter);

// 	4.	Masala: Foydalanuvchi nomi validatsiyasi
// 	•	Shart: Foydalanuvchi nomi faqat harflardan va raqamlardan iborat bo’lishi kerak va uzunligi 4 dan 10 gacha bo’lishi shart. Validatsiya qiling.
// 	•	Input: "user123"
// 	•	Output: true
let user = "user123";
let regex1 = /^[a-zA-Z0-9]{4,10}$/;
console.log(regex1.test(user));

// 	5.	Masala: Sana formatini tekshirish
// 	•	Shart: Berilgan matn sana formatida ekanligini tekshiruvchi RegExp yarating (masalan, DD/MM/YYYY yoki YYYY-MM-DD formatlari).
// 	•	Input: "2025-03-10"
// 	•	Output: true
let date = "2025-03-10";
let regexdate = /^\d{4}-\d{2}-\d{2}$/;
console.log(regexdate.test(date));

// 	6.	Masala: Matndagi bo’sh joylarni o’zgartirish
// 	•	Shart: Berilgan matndagi bo’sh joylar o’rniga - belgisini qo’ying.
// 	•	Input: "RegExp masalalari juda qiziqarli!"
// 	•	Output: "RegExp-masalalari-juda-qiziqarli!"
let str5 = "RegExp masalalari juda qiziqarli!";
let regexstr = str5.replace(/\s/g, "-");
console.log(regexstr);

// 	7.	Masala: Domen nomini ajratib olish
// 	•	Shart: Berilgan URL matnidan domen nomini ajratib oling.
// 	•	Input: "https://www.example.com/path/to/page"
// 	•	Output: "example.com"
let url = "https://www.example.com/path/to/page";
let chekUrl = url.match(/example.com/).join("");
console.log(chekUrl);

// 	8.	Masala: Faqat so’zlarni ajratish
// 	•	Shart: Berilgan matndan faqat so’zlarni (raqamlar va maxsus belgilarni hisobga olmasdan) ajratib oling.
// 	•	Input: "Hello123, this is a test!"
// 	•	Output: "Hello this is a test"
let letter = "Hello123, this is a test!";
console.log(letter.match(/\b[A-Za-z]+\b/g).join(" "));

// 	9.	Masala: Qavs ichidagi matnni olish
// 	•	Shart: Berilgan matndan faqat qavs ichidagi matnni ajratib oling.
// 	•	Input: "Bu matn (qavs ichida) joylashgan."
// 	•	Output: "qavs ichida"

// 	10.	Masala: Matndagi raqamlarni va belgilarni ajratish
// 	•	Shart: Berilgan matndan faqat raqamlarni va maxsus belgilarni ajratib ol.
// 	•	Input: "Salom! 123 @world."
// 	•	Output: "123 @"
let hello = "Salom! 123 @world.";
console.log(hello.match(/[0-9@]/g).join(""));

// 	11.	Masala: IP manzilni tekshirish
// 	•	Shart: Berilgan matn IP manzili ekanligini tekshiruvchi RegExp yozing (IPv4 formatida: XXX.XXX.XXX.XXX).
// 	•	Input: "192.168.0.1"
// 	•	Output: true
let ipAdress = "192.168.0.1";
let chekipAdress = /^\d{3}.\d{3}.\d{1}.\d{1}$/;
console.log(chekipAdress.test(ipAdress));

// 	12.	Masala: URL formatini tekshirish
// 	•	Shart: Berilgan matn URL ekanligini tekshiruvchi RegExp yozing.
// 	•	Input: "https://www.google.com"
// 	•	Output: true

// Qiyin daraja:
// 	1.	Masala: Raqamlarni matnga kiritish
// 	•	Shart: Berilgan raqamlar ketma-ketligini matn orasiga joylashtiring. Har bir raqamning orqasidan so’z qo’shing (masalan, “raqam:”).
// 	•	Input: "123456"
// 	•	Output: "raqam:1 raqam:2 raqam:3 raqam:4 raqam:5 raqam:6"

// 	2.	Masala: Kredit karta raqamini tekshirish
// 	•	Shart: Kredit karta raqami to’g’ri formatda ekanligini tekshiruvchi RegExp yozing. Format XXXX-XXXX-XXXX-XXXX bo’lishi kerak.
// 	•	Input: "1234-5678-9012-3456"
// 	•	Output: true
let cardnum = "1234-5678-9012-3456";
let chekCardnum = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
console.log(chekCardnum.test(cardnum));

// 	3.	Masala: Matndan maxsus belgilarni olib tashlash
// 	•	Shart: Berilgan matndan barcha maxsus belgilarni olib tashlang.
// 	•	Input: "Hello, World! @2025"
// 	•	Output: "Hello World 2025"
let year = "Hello, World! @2025";
console.log(year.match(/[A-Za-z0-9]/g).join(""));

// 	4.	Masala: HTML teglarini olib tashlash
// 	•	Shart: Berilgan matndan barcha HTML teglarini olib tashlang.
// 	•	Input: "<div>Hello</div> <p>World</p>"
// 	•	Output: "Hello World"



// \p{Sc} bu regex faqat maxsus belgisi bor pul birliklarini topadi,
//  lekin so'mning $ga o'xshagan belgisi yo'q. Siz shunaqangi 
// funksiya yozishingiz kerakki ham $larni, ham so'm va shunga
//  o'xshash pul birliklarini topa oladigan bo'lishi kerak.
//  universalCurrency nomli funksiya yozing
const regexp = /[\p{Sc}]|so'm|COM|somoniy/gu;
//   | shu operator bilan hohlagan pul birligi yo'q davlatniong belgisini qo'shib ketishimiz mumkin

const testString = "Hisob: 100$, 50€, 300₽,so'm ,COM,somoniy";

const matches = testString.match(regexp);

console.log(matches);
