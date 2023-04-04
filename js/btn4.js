window.onload=()=>{
    document.getElementById("btn4").onclick=()=>{
       let divContenido= document.getElementById("contenidoExperienciaProfesional");
       if(divContenido.classList.contains("d-none")){
        divContenido.classList.remove("d-none")
       }else{
        divContenido.classList.add("d-none")
       }
    }
}