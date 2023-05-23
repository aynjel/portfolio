<?php

namespace backend\core;

use PDO, PDOException;
use backend\core\Config;

class Database {

    private static $instance = null;

    protected $pdo, $query, $error = false, $results, $count, $lastInsertId = null;
    
    private function __construct() {
        try{
            $host = Config::get('db.host');
            $name = Config::get('db.name');
            $username = Config::get('db.username');
            $password = Config::get('db.password');
            $options = Config::get('db.options');

            $this->pdo = new PDO("mysql:host=$host;dbname=$name", $username, $password, $options);
        }catch(PDOException $e){
            die($e->getMessage());
        }
    }

    public static function getInstance(){
        if(!isset(self::$instance)){
            self::$instance = new Database();
        }

        return self::$instance;
    }

    public function query($sql, $params = []) {
        try {
            $this->error = false;
            $this->query = $this->pdo->prepare($sql);
    
            if (count($params) > 0) {
                foreach ($params as $key => $value) {
                    $this->query->bindValue($key + 1, $value);
                }
            }
    
            if ($this->query->execute()) {
                $this->results = $this->query->fetchAll();
                $this->count = $this->query->rowCount();
                $this->lastInsertId = $this->pdo->lastInsertId();
            } else {
                $this->error = true;
            }
            
            return $this;
        } catch (PDOException $e) {
            // Handle any PDO exceptions
            $this->error = true;
            // You can log or display the error message for debugging
            echo "Error: " . $e->getMessage();
        }
    }

    public function pdo() {
        return $this->pdo;
    }

    public function error() {
        return $this->error;
    }

    public function results() {
        return $this->results;
    }

    public function count() {
        return $this->count;
    }

    public function lastInsertId() {
        return $this->lastInsertId;
    }

    public function first() {
        return $this->results()[0];
    }
    
}