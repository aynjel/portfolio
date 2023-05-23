<?php

require('./autoload.php');

use backend\core\{Session, Config};
use backend\model\User;

Session::init();

// create User
$user = new User();

// $user->createUser([
//     'username' => 'test2',
//     'password' => 'test2',
//     'nickname' => 'test2',
//     'email' => 'sample@gmail.om2',
// ]);

echo '<pre>';
print_r($user->getAllUsers());
echo '</pre>';

// echo '<pre>';
// print_r($user->getColumns()[0]->Extra);
// echo '</pre>';

// login user
// $user->loginUser([
//     'username' => 'test',
//     'password' => 'test',
// ]);

// if ($user->error()) {
//     echo 'error';
// } else {
//     echo 'success';
// }