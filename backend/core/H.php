<?php

namespace backend\core;

class H{

    public static function trim($data){
        return trim($data);
    }
    
    public static function sanitize($data){
        return htmlentities($data, ENT_QUOTES, 'UTF-8');
    }
    
    public static function debug($data, $die = false){
        echo '<pre>';
        print_r($data);
        echo '</pre>';
        if($die){
            die();
        }
    }

    public static function get($item){
        if(isset($_POST[$item])){
            return $_POST[$item];
        }else if(isset($_GET[$item])){
            return $_GET[$item];
        }
        return '';
    }
}