<?php

namespace backend\core;

use backend\core\Database;

class Model{

    protected $db, $table;

    public function __construct($table){
        $this->db = Database::getInstance();
        $this->table = $table;
    }

    public function insert($fields = []){
        $fieldString = '';
        $valueString = '';
        $values = [];

        foreach($fields as $field => $value){
            $fieldString .= '`' . $field . '`,';
            $valueString .= '?,';
            $values[] = $value;
        }

        $fieldString = rtrim($fieldString, ',');
        $valueString = rtrim($valueString, ',');

        $sql = "INSERT INTO {$this->table} ({$fieldString}) VALUES ({$valueString})";

        if(!$this->db->query($sql, $values)->error()){
            return true;
        }

        return false;
    }
}