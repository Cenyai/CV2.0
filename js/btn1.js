window.onload=()=>{
    document.getElementById("btn1").onclick=()=>{
       let divContenido= document.getElementById("contenidoDatosPersonales");
       if(divContenido.classList.contains("d-none")){
        divContenido.classList.remove("d-none")
       }else{
        divContenido.classList.add("d-none")
       }
    }
}