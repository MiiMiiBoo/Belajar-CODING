            /*Tutorial ini saya pelajari dari channel agung hapsah*/
//String
;Pembelajaran String
console.log('udinpekok');

//Variable
    //Peraturan VARIABLE Harus pakai camelcase agar konsisten
const UdinA = 'udindindin'
    console.log(UdinA);
    console.log(UdinA);
    console.log(UdinA);

    //Aturan Variable
const myName = 'udin'
const myLastname = 'pekok'
const myHobbie = 'ngerokok'
const umur = '200'
    console.log(myName);
    console.log(myLastname);
    console.log(myHobbie);
    console.log(umur);

//String contcatenation
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

    //Number bisa memakai {- kurang, + tambah, * kali , / bagi, % modulo, ** eksponen, ++ increment, -- decrement}
const a = 10;
const b = 2;
const c = a + b;
    console.log(c);

//order of operation
    //menurut logika matematika basic akan melakukan perkalian terlebih dahulu
const a = 10 + 32 * 13
    console.log(a);

    //jika ingin melakukan pertambahan terlebih dahulu maka ditambahkan kurung
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

//Boolean {true, false}
const isMakanan = true;
const isAnak = false;
const isPelajar = true;
const isPekerja = false;
const canRidebike = true;
    console.log(isAnak);

//Conditional {if, else}
const hasSim = true;
if (hasSim) {
    console.log('boleh nyetir');
} else {
    console.log('tidak boleh nyetir')
}

//tata cara penggunaan else if. Else di akhir tidak perlu di isi dengan string
//karena sudah mewakilkan jika tidak ada dari semua data yang sudah di isi dari if hingga else if.
//untuk urutan sesuai dari atas ke bawah, jika ada error selalu perhatikan urutan.
const angka = 100

if (angka < 10){
    console.log('satuan')
}
else if (angka < 100){
    console.log('puluhan')
}
else if (angka < 1000){
    console.log('ratusan')
}
else {
    console.log('angka tidak valid')
}

/*Object adalah kumpulan dalam 1 keyvalue*/
const name = 'Pisang';
const weight = '5';
const isSoldout = false;

    // ini untuk 1 produk jadi bisa dijadikan 1 variabel saja
const product = {
     name : 'Pisang',
     weight: 5,
     isSoldout : false
    };
    //contoh pengerjaan
    const person = {
        nama : 'udin',
        umur : 29,
        tahunLahir : 1990,
        apakahBekerja : false
    };
console.log(person.tahunLahir);       //jika ingin hanya ingin menampilkan nama saja tambahkan .isi variable

//Array adalah cara menyimpan data dengan berbentuk daftar
    //Fungsi .length (total berapa jumlah di dalam array)
const usernames = [
    'yadi',
    'dimas',
    'mita'
];
const hasil = 'Ada' + ' ' +usernames.length + ' ' + 'Username'
    console.log(hasil)

//fungsi .includes (apakah di dalam array itu memiliki element tertentu), apakah ada (...)?
const username = [
    'yadi',
    'dimas',
    'mita'
];
const newUsername = 'udin'
const hasTrue = username.includes(newUsername)
    if (hasTrue) {
    console.log('username ada')
}
    else console.log('username tidak ada')

    //jika ingin hanya element yang dipilih di dalam array
    //kita menggunakan bracket notation ([]) dengan isi dari index (0, 1, 2, 3, 4, ....)
const username = [
    'yadi',         //index ke 0
    'dimas',        //index ke 1
    'mita'          //index ke 2
];
console.log(username[2])        //ini bracket notation


    //contoh soal
const makanan = [
    'bakso',
    'sate',
    'geprek'
];
const hasil = 'makanan favoritku adalah' + ' ' //+ makanan[2]\\ <-- ataupun bisa di taruh ke sini bracket notationnya
    console.log(hasil + makanan[2])

//Undefined (Tak terdifinisi atau Tidak ada) & null, Untuk penggunaan tidak ada bedanya, cukup pilih salah satu saja
//secara logika undifined tidak sama dengan null
const logika = (undefined === null)         //bertanya kepada mesin apakah undifined sama dengan null?
    console.log(logika)


    //Undifined
const sepatu = 'BMST';
const motor = 'Honda';
const sepeda = 'United';
const mobil = 'katana';
const kapal = undefined
const pesawat = undefined
    console.log(kapal);

    //null
const sepatu = 'BMST';
const motor = 'Honda';
const sepeda = 'United';
const mobil = 'katana';
const kapal = null
const pesawat = null
    console.log(kapal);

    //function artinya untuk melakukan sesuatu
function saySelamatUlangTahun() {
    console.log('Selamat Ulang Tahun!')     //ini adalah console body
}
    saySelamatUlangTahun();                 //function hanya berkerja jika saat dipanggil. Dan penggunaan tidak terbatas.
    //contoh 2
function namaSaya() {
    console.log('UDIIIIIIIIIIIN')
}
    namaSaya();
    namaSaya();
    namaSaya();
