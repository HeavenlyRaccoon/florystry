'use strict'
let i=4;
function slide(a){

    var el = document.getElementsByTagName("img");
    var op = 1;
    setTimeout(function func() {
        if (op < 0)
            return;
        el[2].style.opacity = op;
        el[3].style.opacity = op;
        el[4].style.opacity = op;
        el[5].style.opacity = op;
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
        el[2].style.opacity = op;
        el[3].style.opacity = op;
        el[4].style.opacity = op;
        el[5].style.opacity = op;
        op += 0.1;
        setTimeout (func, 30);
        
    });
    }
}
