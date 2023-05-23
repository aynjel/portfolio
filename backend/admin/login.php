<?php

require('./../autoload.php');

use backend\core\{Request, Session};
use backend\model\User;

$username = Request::get('username');
$password = Request::get('password');

try{
    if(!empty($username) && !empty($password)){
        $user = new User();
        $login = $user->loginUser([
            'username' => $username,
            'password' => $password
        ]);

        if($login){
            Session::set('user', $login);
            echo json_encode([
                'status' => 'success',
                'message' => 'Login successful.',
                'data' => $login
            ]);
        }else{
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid username or password.'
            ]);
        }
    }else{
        echo json_encode([
            'status' => 'error',
            'message' => 'Please enter username and password.'
        ]);
    }

} catch(Exception $e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}    

