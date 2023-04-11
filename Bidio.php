<?php
if (isset($_POST['mostrar'])) {
    $contenido = file_get_contents('idiomas.html');
    echo $contenido;
}
?>