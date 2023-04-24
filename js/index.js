window.onload = () => {
    document.getElementById("btn1").onclick = () => {
        let divContenido = document.getElementById("datospersonales");
        if (divContenido.classList.contains("ocultar")) {
            divContenido.classList.remove("ocultar")
        } else {
            divContenido.classList.add("ocultar")
        }
    }

    document.getElementById("btn2").onclick = () => {
        let divContenido = document.getElementById("contenidoImportante");
        if (divContenido.classList.contains("d-none")) {
            divContenido.classList.remove("d-none")
        } else {
            divContenido.classList.add("d-none")
        }
    }

    document.getElementById("btn3").onclick = () => {
        let divContenido = document.getElementById("contenidoEstudios");
        if (divContenido.classList.contains("d-none")) {
            divContenido.classList.remove("d-none")
        } else {
            divContenido.classList.add("d-none")
        }
    }

    document.getElementById("btn4").onclick = () => {
        let divContenido = document.getElementById("contenidoExperienciaProfesional");
        if (divContenido.classList.contains("d-none")) {
            divContenido.classList.remove("d-none")
        } else {
            divContenido.classList.add("d-none")
        }
    }

    document.getElementById("btn5").onclick = () => {
        let divContenido = document.getElementById("contenidoIdiomas");
        if (divContenido.classList.contains("d-none")) {
            divContenido.classList.remove("d-none")
        } else {
            divContenido.classList.add("d-none")
        }
    }
}



