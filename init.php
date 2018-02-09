<?php
$Host = "192.168.10.101\SQLEXPRESS";
$connInfo = array("UID" => 'sa', "PWD" => 'sasa', "Database" => 'IPI');
$conn = sqlsrv_connect($Host, $connInfo);
?>
