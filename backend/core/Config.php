<?php

namespace backend\core;

use PDO;

class Config{
    private static $config = [
        'db' => [
            'host' => 'localhost',
            'name' => 'portfolio',
            'username' => 'root',
            'password' => '',
            'options' => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
            ]
        ],
        'app' => [
            'name' => 'Portfolio',
            'url' => 'http://localhost/portfolio'
        ],
        'auth' => [
            'username' => 'admin',
            'password' => 'admin'
        ],
        'mail' => [
            'host' => 'smtp.gmail.com',
            'port' => 587,
            'username' => 'sample@gmail.com',
            'password' => 'sample',
            'encryption' => 'tls',
            'from' => 'Sample'
        ]
    ];

    public static function get($path = null){
        if($path){
            $config = self::$config;
            $path = explode('.', $path);

            foreach($path as $bit){
                if(isset($config[$bit])){
                    $config = $config[$bit];
                }
            }

            return $config;
        }

        return false;
    }
}