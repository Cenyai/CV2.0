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
        let divContenido = document.getElementById("importante");
        if (divContenido.classList.contains("ocultar")) {
            divContenido.classList.remove("ocultar")
        } else {
            divContenido.classList.add("ocultar")
        }
    }

    document.getElementById("btn3").onclick = () => {
        let divContenido = document.getElementById("estudios");
        if (divContenido.classList.contains("ocultar")) {
            divContenido.classList.remove("ocultar")
        } else {
            divContenido.classList.add("ocultar")
        }
    }

    document.getElementById("btn4").onclick = () => {
        let divContenido = document.getElementById("expprof");
        if (divContenido.classList.contains("ocultar")) {
            divContenido.classList.remove("ocultar")
        } else {
            divContenido.classList.add("ocultar")
        }
    }

    document.getElementById("btn5").onclick = () => {
        let divContenido = document.getElementById("idiomas");
        if (divContenido.classList.contains("ocultar")) {
            divContenido.classList.remove("ocultar")
        } else {
            divContenido.classList.add("ocultar")
        }
    }
}



