function shavedPicture() { 
document.getElementById("mylogo").src="images/shavedonion.jpg";  
document.getElementById("mylogo").style.borderColor="#ffffff";
}
 
function beardPicture() { 
document.getElementById("mylogo").src="images/iamtheonion.jpg";
document.getElementById("mylogo").style.borderColor="#ff4040";
}

var isDay=true;

function nightorDayMode(){
    
    var nav = document.getElementsByClassName('nav');
    var text = document.getElementsByClassName('text');
    

    
    if(isDay){
        var changeNav = nav[7].innerHTML = "Day Mode";
        var changeTomateText = text[7].innerHTML = "Day Mode";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        isDay=false;
    }else{
        var changeNav = nav[7].innerHTML = "Night Mode";
        var changeTomateText = text[7].innerHTML = "Night Mode";
        document.body.style.backgroundColor = "#ffcc73";
        document.body.style.color = "black";
        isDay=true;
    }
}

function confirmVid(){
    var confirmation = alert("You are being link to a Youtube Video.");
}