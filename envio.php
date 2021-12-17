<?php
$destino='tenco216@gmail.com';
$name=$_POST['nombre'];
$email=$_POST['email'];
$mensaje=$_POST['mensaje'];
$contenido="Nombre: " . $name . "\nCorreo: " . $email .  "\nMensaje: " . $mensaje;
mail($destino,"Contacto Web", $contenido);
echo "mensaje ok";
?>