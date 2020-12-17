$(document).ready(function() {
    
let characters = ["https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png", "https://vignette.wikia.nocookie.net/sonicpokemon/images/7/77/Pikachu.png/revision/latest?cb=20200831092023", "https://static.hollywoodreporter.com/sites/default/files/2017/07/sonic-928x523.jpg"];

var store;

$(".add").click(function(){
    store = $(".image-url").val();
    $(".image-url").val("");
    $(".gallery").append("<img src=" + store + ">");
});

characters.forEach(function(character, image){
    $(".gallery").append("<img src=" + characters[image] + ">");
});

characters.push(".image-url");
    });
