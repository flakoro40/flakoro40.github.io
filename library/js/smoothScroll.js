// smooth scroll
var posY = 0;
var jarak = 15;

function smoothScroll(id){
    var target = document.getElementById(id).offsetTop; // jarak antara atas dan div
    var scrollAnimate = setTimeout(function(){
        smoothScroll(id);
    }, 10) // fungsi waktu

    posY = posY + jarak;

    // berhenti pada bagian tertentu
    if(posY >= target){
        clearTimeout(scrollAnimate);
        posY;
    }else{
        window.scroll(0, posY); // x dan y
    }

    return false;
}