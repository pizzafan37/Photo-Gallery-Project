let characters = ["https://static.wikia.nocookie.net/nintendo/images/d/d8/New_Super_Mario_Bros._U_Deluxe_-_Mario_01.png/revision/latest?cb=20181226204245&path-prefix=en", "https://vignette.wikia.nocookie.net/sonicpokemon/images/7/77/Pikachu.png/revision/latest?cb=20200831092023", "https://static.wikia.nocookie.net/sonic/images/2/2d/TSR_Sonic.png/revision/latest?cb=20191020043348"];

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