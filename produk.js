var produk = {
    "Action-Figure" : [{
        "nama" : "Rikka Takanashi",
        "image":"assets/produk1.jpg",
        "desk":"waifu asa fajar, rikka takanashi dari anime chuninbyou asdasdasd",
        "harga": 150000
    },
    { 
        "nama" : "Roronoa Zoro",
        "image":"assets/produk2.jpg",
        "desk":"Rorono zoro dari anime one piece,Rorono zoro dari anime",
        "harga": 150000
    },
    { 
        "nama" : "Uzumaki Naruto",
        "image":"assets/produk3.jpg",
        "desk": "deskUzumaki Naruto, Hokage ke 7 konoha",
        "harga": 150000
    },
    { 
        "nama" : "Todoroki Shoto",
        "image":"assets/produk4.jpg",
         "desk":"Todoroki Shoto dari anime My hero academy",
       "harga": 150000
    },
]
}

for( var key in produk){
    var judul=document.createElement('h2');
    judul.className='mt-3'
    judul.innerHTML=key;
    document.getElementById(key).appendChild(judul);

    var cardGroup=document.createElement('div');
    cardGroup.className='card-group';
    cardGroup.id= `${key}-produk`;
    document.getElementById(key).appendChild(cardGroup);

    for(var i=0; i<produk[key].length; i++){
       var namaProduk=produk[key][i].nama;
       var imageProduk=produk[key][i].image;
       var deskProduk=produk[key][i].desk;
       var hargaProduk=produk[key][i].harga;

       console.log(imageProduk)
       console.log(deskProduk)
       console.log(hargaProduk)
        
       var card=document.createElement('div');
       card.className='card';
       card.innerHTML=` 
       <img src= ${imageProduk} class="card-img-top" alt="..." width="150" height="150">

       <div class="card-body">
        <h5 class="card-title">${namaProduk}</h5>
        <p class="card-text">${deskProduk}</p>
        <p class="card-text">${hargaProduk}</p>
        <a onclick="chatToAdmin('${namaProduk}','${deskProduk}','${hargaProduk}')" class="btn btn-primary d-block">Beli Produk</a>
       </div>`
       document.getElementById(`${key}-produk`).appendChild(card);
    }
}


function chatToAdmin(nama,desk,harga){
    var noHp ="+6281213230640";
    window.open(`https://wa.me/${noHp}?text=nama-produk:%20${namaProduk}%0Adeskripsi:%20${deskProduk}%0AHarga:%20${hargaProduk}%0A Terima kasih<3`)

}