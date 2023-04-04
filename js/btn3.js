window.onload=()=>{
    document.getElementById("btn3").onclick=()=>{
       let divContenido= document.getElementById("contenidoEstudios");
       if(divContenido.classList.contains("d-none")){
        divContenido.classList.remove("d-none")
       }else{
        divContenido.classList.add("d-none")
       }
    }
}