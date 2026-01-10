
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


 // CARDAPIOS BUTTONS
const btnsCardapios = document.querySelectorAll(".cardapios-buttons a");
const cardapio = document.querySelectorAll(".cardapio-item-container.div");
const cardapioContainer = document.querySelectorAll(".cardapio-container .cardapio-item");

 const cardapioTipos = {
    Doce: document.querySelectorAll("#cardapio .Doce"), 
    Salgado: document.querySelectorAll(".cardapio-container .Salgado"),
    Refrigerante: document.querySelectorAll(".cardapio-container .Refrigerante"),
    Calzone: document.querySelectorAll(".cardapio-container .Calzone"),
 }

 btnsCardapios.forEach(
     function(btn){
        btn.addEventListener("click", function(e){
            e.preventDefault();
            let el = e.target.textContent;
            toggleItems(el);
        })
     }
 )

     function toggleItems(add){

        removeItems();
        addItems(add);

        function removeItems(){
            cardapioContainer.forEach(
                function(el){
                    el.classList.add("hidden");
                }
            )
        }

        function addItems(add){
            cardapioTipos[add].forEach(
                function(e){
                    e.classList.remove("hidden");
                }
            )
        }


     }

     //removeItems
     function removeItems(){

     }















