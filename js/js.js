$('.nemubutton').on('click',function(){
    $('.menuSmol').toggle();
})
// $('.menu a').on('click',function(){
//     $('.menuSmol').toggle();
// });
function contacts(w){
    var a=$(".conteiner");
    var b=$(w);
    h();
    function h(){
        a.not(w).slideUp(1000);
        }
    setTimeout(function s(){
            b.slideDown(1000);
        },1000);
    setTimeout(function Null(){
        a=null;
        b=null}
        ,5000); 
}


function mainAll(w){
    var a=$(".conteiner");
    var b=$(w);
   a.not(w).slideDown(1000); 
}




function next(){
    slideshow();
    clearInterval(int5cek);
}
function prev(){
    slideshow();
    clearInterval(int5cek);
}

function slideshow(){
    var foto1=document.getElementById("foto1");
    var foto2=document.getElementById("foto2");
    if (foto2.style.display==="none"){
        foto1.style.display="none";
        foto2.style.display="block";
    } else {
        foto1.style.display="block";
        foto2.style.display="none";
    }
}
var int5cek=setInterval(slideshow,5000);







function iclose(){
    close();
    setTimeout(function close(){
        $('.blackconteiner').addClass("hide")},500);
}
function showBigImg(w){
    $('.blackconteiner').removeClass('hide');
    $('.bigImg').attr('src', w);
}