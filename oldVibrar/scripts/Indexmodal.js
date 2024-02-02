let cerrartodo=document.querySelectorAll(".cerrar")[0];
let abrir=document.querySelectorAll(".noticias")[0];
let modal=document.querySelectorAll(".modal")[0];
let modalC=document.querySelectorAll(".modal-container")[0];


abrir.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close");

});

cerrartodo.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
    modalC.style.opacity="0";
    modalC.style.visibility="hidden";
});

