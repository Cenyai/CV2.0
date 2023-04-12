<?php
if (isset($_POST['mostrar'])) {
    $contenido = file_get_contents('Estudios.html');
    echo $contenido;
}
?>