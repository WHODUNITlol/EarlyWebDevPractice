let answer = document.querySelectorAll(".button");
let response = document.querySelector("#response")

answer.forEach(function(param){
    param.addEventListener('click', function(){
        if(param.id === "option") {
            response.childNodes[0].src="../images/thumbsup.png";
            response.style.display = "block";
        }
        else {
            response.childNodes[0].src="../images/Poopemoji.png";
            response.style.display = "block";
        }
    });
});



