<?php

$input1 = $_GET['username'];
$input2 = $_GET['password'];

if(isset($input1) && isset($input2)){
    if(!empty($input1) || !empty($input2)){
        echo json_encode([
            'status' => 'success',
            'username' => $input1,
            'password' => $input2
        ]);
    }else{
        echo json_encode([
            'status' => 'error',
            'username' => 'username',
            'password' => 'password'
        ]);
    }
}else{
    echo json_encode([
        'status' => 'error',
        'username' => 'username',
        'password' => 'password'
    ]);
}