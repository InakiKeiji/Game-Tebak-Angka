// membuat variabel
var hasil='';
var kesempatan='';
var hasilAkhir='';
// comp memasukkan angka 1 - 10 secara acak
var c=Math.random();
var hc;
var k=3;

// opening
alert('tebak angka dari 1 - 10\nkamu punya 3 kesempatan');

while(k>0){
    // player memasukkan angka
    var p=prompt('masukkan angka tebakan:');

    // comp memproses dari angka acak tadi
    for(var i=1;i<=10;i++){
        if(i==1){
            if(c<=i/10){
                hc=1;
            }
        }else if(i==10){
            if(c>(i-1)/10){
                hc=10;
            }
        }else{
            if(c>(i-1)/10&&c<=i/10){
                hc=i;
            }
        }
    }
    k-=1;
    // rules
    if(p<hc){
        // terlalu rendah
        hasil='RENDAH!';
        // menampilkan hasil kemudian mengulang memasukkan angka
        if(k==0){
            kesempatan='kesempatan anda habis';
            hasilAkhir='gagal!';
        }else
            kesempatan='ayo masih ada '+k+' kesempatan.';
    }else if(p>hc){
        // terlalu tinggi
        hasil='TINGGI!';
        // menampilkan hasil kemudian mengulang memasukkan angka
        if(k==0){
            kesempatan='kesempatan anda habis';
            hasilAkhir='gagal!';
        }else
            kesempatan='ayo masih ada '+k+' kesempatan.';
    }else{
        // anda benar!
        // jika benar langsung menampilkan hasil akhir
        hasilAkhir='benar!'
        break;
    }

    // menampilkan hasil
    // menampilkan kesempatan
    alert('terlalu '+hasil+'\n'+kesempatan);
}

// menampilkan hasil akhir
alert('anda '+hasilAkhir+'\nangka yang dicari adalah : '+hc);
alert('terimakasih');