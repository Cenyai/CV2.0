window.onload=()=>{
    document.getElementById("btn2").onclick=()=>{
       let divContenido= document.getElementById("contenidoImportante");
       if(divContenido.classList.contains("d-none")){
        divContenido.classList.remove("d-none")
       }else{
        divContenido.classList.add("d-none")
       }
    }
}