let call1 = false;
let call2 = false;
let call3 = false;

function swipe(a, b) {
    let img = document.getElementById(a);

    if (a == "image1") {
        if (!call1) {
            img.src = b ;
            call1 =true;
        }else{
            img.src = "./img/img1.png";
            call1 = false;
        }
    }
    else if(a=="image2"){
        if (!call2) {
            img.src=b;
            call2 =true;
        }else{
            img.src="./img/im3.png"
            call2=false;
        }
    }
      else if(a=="image3"){
        if (!call3) {
            img.src=b;
            call3 =true;
        }else{
            img.src="./img/img5.jpg"
            call3=false;
        }
    }

}


