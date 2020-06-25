window.onload = function(){
      var photo = document.getElementById ("photo");
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var photos = [
       "http://severilov.ru/1.jpg",
       "http://severilov.ru/2.jpg",
       "http://severilov.ru/3.jpg",
       "http://severilov.ru/4.jpg",
       "http://severilov.ru/5.jpg",
       "http://severilov.ru/6.jpg"
    ]
    num = 0;
    prev.addEventListener('click', 
    function(){
        num --;
        if(num < 0){
            num = photos.length -1;
        }
        photo.src = photos[num];
    });
    next.addEventListener("click" , nextImage);
        function nextImage(){
        num ++;
        if(num >= photos.length){
            num = 0
        }
        photo.src = photos[num];
    };
    photo.addEventListener('click', nextImage)
}
