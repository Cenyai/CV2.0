<?php
if (isset($_POST['mostrar'])) {
    $contenido = file_get_contents('DatosPersonales.html');
    echo $contenido;
}
?>































