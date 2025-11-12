// Proggram pertama (ini berisi komentar jadi tidak dieksekusi oleh kode program)
#include <iostream>

int main()
{
    std::cout << "hellow world";
}

/*
ini merupakan komentar multi line 
jadi tidak perlu manual garis miring (/)
*/
#include <iostream>

int main()
{
    std::cout << "hellow world";
}

/*bagaimana jika tidak ingin menggunakan std::cout
 jadi bisa menggunakan cout saja contoh*/

 #include <iostream>
using namespace std;
 int main ()
 {
    cout << "hellow world";      /*contoh penghilangan std::*/
 }

 /*ada 4 tipe data fundamental dalam c++*/
 #include <iostream>
 using namespace std;

 int main ()
 {
    char karaktersaya = 'A';
    int panjang = 29;
    int lebar = 10;
    float phi = 3.4;
    bool a;

    int luas = panjang * lebar;
    cout << luas;
 }