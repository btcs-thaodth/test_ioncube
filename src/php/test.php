<?php
    require_once 'Cryptogram.php';
    $crypt = new Cryptogram();
    $decrypted = $crypt->test('test ioncube');
    echo $decrypted;
?>