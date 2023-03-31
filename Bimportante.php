<?php
if (isset($_POST['mostrar'])) {
    $contenido = file_get_contents('index.html');
    echo $contenido;
}
?>