<?php
if (isset($_POST['mostrar'])) {
    $contenido = file_get_contents('ExperienciaProfesional.html');
    echo $contenido;
}
?>