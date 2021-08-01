var photos = ["image/slider1.jpg","image/slider2.jpg","image/slider3.jpg","image/slider4.jpg","image/slider5.jpg","image/slider6.jpg","image/slider7.jpg"];
var imgTag = document.querySelector(".image img");
var count = 0;


function right(){
    count++
    
    if(count>=photos.length){
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}

function left(){
    count--
    
    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}

 