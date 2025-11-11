    //#String
;Pembelajaran String
console.log('udinpekok');

    //#Variable
    //#Peraturan VARIABLE Harus pakai camelcase agar konsisten
const UdinA = 'udindindin'
    console.log(UdinA);
    console.log(UdinA);
    console.log(UdinA);

    //#Aturan Variable
const myName = 'udin'
const myLastname = 'pekok'
const myHobbie = 'ngerokok'
const umur = '200'
    console.log(myName);
    console.log(myLastname);
    console.log(myHobbie);
    console.log(umur);

    //#String contcatenation
const myName = 'udin'
const myLastname = 'pekok'
const myHobbie = 'ngerokok'
const umur = '200'
const fullname = myName + ' ' + myLastname;
    console.log(fullname);
    console.log(myName);
    console.log(myLastname);
    console.log(myHobbie);
    console.log(umur);

    //#Number bisa memakai {- kurang, + tambah, * kali , / bagi, % modulo, ** eksponen, ++ increment, -- decrement}
const a = 10;
const b = 2;
const c = a + b;
    console.log(c);

    //#order of operation
//#menurut logika mm basic akan melakukan perkalian terlebih dahulu
const a = 10 + 32 * 13
    console.log(a);

//#jika ingin melakukan pertambahan terlebih dahulu maka ditambahkan kurung
const a = (10 + 32) * 13
    console.log(a);

//pertambahan dan perkalian
const a = 5000;
const b = 10000;
const c = (a * 3) + b * 2
const d = c - 10000;
    console.log(d);

//Versi logika lain
const a = 5000;
const b = 10000;
const c = 3;
const d = 2;
const e = 10000;

const hasil = a * c + b * d - e;
    console.log(hasil);

//penggunaan dengan desimal (1.5) atau berapapun 10%/40%
const a = 5000;
const b = 10000;
const c = 3;
const d = 2;
const e = 0.1 //10%

const hasil = a * c + b * d - e;
const hasil2 = hasil - hasil * e;
    console.log(hasil2);
