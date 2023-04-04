window.onload=()=>{
    document.getElementById("btn5").onclick=()=>{
       let divContenido= document.getElementById("contenidoIdiomas");
       if(divContenido.classList.contains("d-none")){
        divContenido.classList.remove("d-none")
       }else{
        divContenido.classList.add("d-none")
       }
    }
}