
var FlatDB = require('flat-db');
FlatDB.configure({
    dir: './storage'
  });

var ads = new FlatDB.Collection('ads', {
    lableFoce: '',
    lableVije: '',
    title:'',
    picture:'',
    price:0,
    city:'',
    timeCreate:''
  });

exports.mackCollection = function (){
   
}  

exports.getAllAds = function (){
    var all = ads.all();
    return all;
}

exports.addAds = function() {
    let keys = ads.add([
        {
            lableFoce: 'فوری',
            lableVije: 'ویژه',
            title:'لامپ',
            picture:'http://127.0.0.1:8080/images/iphone.jpg',
            price:5000,
            city:'نیشابور',
            timeCreate:'1396/11/26'
        },
        {
            lableFoce: 'فوری',
            lableVije: 'ویژه',
            title:'لامپ',
            picture:'http://127.0.0.1:8080/images/iphone.jpg',
            price:5000,
            city:'نیشابور',
            timeCreate:'1396/11/26'
        }
      ]);
}
