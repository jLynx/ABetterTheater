<?php
header("Access-Control-Allow-Origin: *");
echo json_encode(["country" => $_SERVER["HTTP_CF_IPCOUNTRY"]]);
?>