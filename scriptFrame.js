'use strict'

let i=4;
function slide(a){

    var el = document.getElementsByTagName("img");
    var op = 1;
    setTimeout(function func() {
        if (op < 0)
            return;
        el[9].style.opacity = op;
        el[10].style.opacity = op;
        el[11].style.opacity = op;
        el[12].style.opacity = op;
        op -= 0.1;
        setTimeout (func, 30);
        
    },60);   
    setTimeout(switchImg, 400);
    setTimeout(opca, 400);
    function switchImg(){
        console.log("op");
        i++;
        if(i>8){
            i=1;
        }
        console.log(a);
        console.log(i);
        switch (i){
            case 1:{
                $('.slideOne img').attr("src","/floristry/pictures/frame"+a+"_"+6+".jpg");
                $('.slideTwo img').attr("src","/floristry/pictures/frame"+a+"_"+7+".jpg");
                $('.slideThree img').attr("src","/floristry/pictures/frame"+a+"_"+8+".jpg");
                $('.slideFour img').attr("src","/floristry/pictures/frame"+a+"_"+i+".jpg");
                break;
            }
            case 2:{
                $('.slideOne img').attr("src","/floristry/pictures/frame"+a+"_"+7+".jpg");
                $('.slideTwo img').attr("src","/floristry/pictures/frame"+a+"_"+8+".jpg");
                $('.slideThree img').attr("src","/floristry/pictures/frame"+a+"_"+(i-1)+".jpg");
                $('.slideFour img').attr("src","/floristry/pictures/frame"+a+"_"+i+".jpg");
                break;
            }
            case 3:{
                $('.slideOne img').attr("src","/floristry/pictures/frame"+a+"_"+8+".jpg");
                $('.slideTwo img').attr("src","/floristry/pictures/frame"+a+"_"+(i-2)+".jpg");
                $('.slideThree img').attr("src","/floristry/pictures/frame"+a+"_"+(i-1)+".jpg");
                $('.slideFour img').attr("src","/floristry/pictures/frame"+a+"_"+i+".jpg");
                break;
            }
            default:{
                $('.slideOne img').attr("src","/floristry/pictures/frame"+a+"_"+(i-3)+".jpg");
                $('.slideTwo img').attr("src","/floristry/pictures/frame"+a+"_"+(i-2)+".jpg");
                $('.slideThree img').attr("src","/floristry/pictures/frame"+a+"_"+(i-1)+".jpg");
                $('.slideFour img').attr("src","/floristry/pictures/frame"+a+"_"+i+".jpg");
                break
            }
        }
    }
    function opca(){
    var el = document.getElementsByTagName("img");
    var op = 0;
    setTimeout(function func() {
        if (op > 1)
            return;
        el[9].style.opacity = op;
        el[10].style.opacity = op;
        el[11].style.opacity = op;
        el[12].style.opacity = op;
        op += 0.1;
        setTimeout (func, 30);
        
    });
    }
}
$(".facebookIcon").hover(function () {
    console.log("LOL");
    $(this).attr("src", "/floristry/pictures/facebookIconNeg.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/facebookIcon.svg");
});
$(".instagramIcon").hover(function () {
    $(this).attr("src", "/floristry/pictures/instagramIconNeg.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/instagramIcon.svg");
});
$(".whatsappIcon").hover(function () {
    $(this).attr("src", "/floristry/pictures/whatsupIconNeg.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/whatsupIcon.svg");
});
$(".vkIcon").hover(function () {
    $(this).attr("src", "/floristry/pictures/vkIconNeg.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/vkIcon.svg");
});
let check = true;
$(".burgerMenuDeckstop").click(function(){
    console.log("LLL");
    if(check){
        $(".left, .right").slideToggle();
        setTimeout(slideHead,500);
    }
    else{
        slideHead();
        setTimeout(function(){
            $(".left, .right").slideToggle();
        },500);
    }
    function slideHead(){
        $("header").slideToggle();
        if(check){
            $(".burgerMenuDeckstop img").attr("src","/floristry/pictures/closeMenuDeck.svg");
            $(".burgerMenuDeckstop").css("position","static");
            $(".burgerMenuDeckstop").css("margin-right","5%");
            check=!check;
        }
        else{
            $(".burgerMenuDeckstop img").attr("src","/floristry/pictures/burgerMenuDeckstop.svg");
            $(".burgerMenuDeckstop").css("position","relative");
            check=!check;
        }
    }
   
});
 function order(){
     $(".darkwindow").css("display","block");
 }
 function closeOrder(){
    $(".containerOfP").css("display","block");
    $(".orderInput").css("display","flex");
    $(".waitCall").css("display","none");
    $(".darkwindow").css("display","none");
    let a = $(".text");
     a[0].value="";
     a=$(".tel");
     a[0].value="";
 }
 function wait(){
     $(".containerOfP, .orderInput").slideUp();
     setTimeout(function(){
         $(".waitCall").slideToggle();
     },100);
 }
