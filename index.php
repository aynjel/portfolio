<?php

require('./autoload.php');

use backend\core\{Config, Database};

echo Config::get('db.host');

// try query
$db = Database::getInstance();
// $stmt = $db->query('SELECT * FROM users');

// echo '<pre>';
// print_r($stmt->fetchAll());
// echo '</pre>';

// create new user
$sql = "INSERT INTO users (username, password, nickname, email) VALUES (?, ?, ?, ?)";
$params = ['user', 'user', 'user', 'sample@gmail.com'];
$stmt = $db->query($sql, $params);

if(!$stmt->error()){
    echo 'User created successfully';
}else{
    echo 'Error creating user';
}
// get all users
// $stmt = $db->query('SELECT * FROM users');
// echo '<pre>';
// print_r($stmt->fetchAll());
// echo '</pre>';