<?php
if (isset($_POST['mostrar'])) {
    $contenido = file_get_contents('importante.html');
    echo $contenido;
}
?>