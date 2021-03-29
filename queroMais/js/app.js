
 const popularesSec = document.querySelector("#populares");
 const populareSetas = document.querySelectorAll("#populares i");

 popularesSec.addEventListener("mouseover", function(){
    for(setas of populareSetas){
        setas.classList.toggle("hidden");
    }
 })    

 popularesSec.addEventListener("mouseout", function(){
    for(setas of populareSetas){
        setas.classList.toggle("hidden");
    }
 })   























