var hoot=["https://i.dlpng.com/static/png/344359_thumb.png","https://bloximages.chicago2.vip.townnews.com/unionrecorder.com/content/tncms/assets/v3/editorial/c/e3/ce3145b4-7046-11e9-8429-83883ed48c39/5cd0a8974c57c.image.jpg?resize=400%2C300","https://previews.123rf.com/images/brgfx/brgfx1702/brgfx170200140/70917694-facial-expression-with-word-aggravated-illustration.jpg"];
var shop=["https://media.mnn.com/assets/images/2015/03/Loneliness-m-0313.jpg.653x0_q80_crop-smart.jpg","https://emc3coaching.com/wp-content/uploads/2018/05/lonely-4.jpg","https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/880/cached.offlinehbpl.hbpl.co.uk/news/OTM/francescochGettyImages-862656980-20190307103929843.jpg"];
var donzo=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmM1376rJzlEk6uF_ZKXtRjwR5cYIEBwI-d4uPnyCJ-aSTzAy5","https://pics.me.me/cranky-12007357.png","https://vignette.wikia.nocookie.net/ttte/images/d/dc/MainCrankyCGI2.png/revision/latest?cb=20180711054235"];


$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "Aggravated"){
      gordan();
    } else if(input==="Lonely"){
        hitter();
    }else if(input==="Cranky"){
      port();
    }else{
     alert("Please enter one of the followings!");   
    }



function gordan(){
    changeBackground("https://images-na.ssl-images-amazon.com/images/I/718EWRaSBWL._SX425_.jpg");
    changeTextColor("blue");
    hoot.forEach(function(rot){
        displayImage(rot);});
}
function hitter(){
    changeBackground("https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    changeTextColor("green");
    shop.forEach(function(cart){
        displayImage(cart);});
}
function port(){
    changeBackground("https://images-na.ssl-images-amazon.com/images/I/418ZEzc1x0L._SX425_.jpg");
    changeTextColor("Red");
    donzo.forEach(function(cort){
        displayImage(cort);});
}


function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}
});