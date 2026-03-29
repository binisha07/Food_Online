<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "ssb-food";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed:". $cann->connect_error);
}

?>