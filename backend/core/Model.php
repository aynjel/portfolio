<?php

namespace backend\core;

use backend\core\Database;

class Model{

    protected $db, $table, $primaryKey = 'id', $columns = [];

    public function __construct($table){
        $this->db = Database::getInstance();
        $this->table = $table;
        $this->setTableColumns();
    }

    // set primary key
    public function setPrimaryKey($primaryKey){
        $this->primaryKey = $primaryKey;
    }

    // set table columns
    public function setTableColumns(){
        $columns = $this->getColumns();
        foreach($columns as $column){
            $this->columns[] = $column->Field;
        }
    }

    // get table columns
    public function getColumns(){
        return $this->db->query("SHOW COLUMNS FROM {$this->table}")->results();
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

    public function update($id, $fields = []){
        $fieldString = '';
        $values = [];

        foreach($fields as $field => $value){
            $fieldString .= ' ' . $field . ' = ?,';
            $values[] = $value;
        }

        $fieldString = trim($fieldString);
        $fieldString = rtrim($fieldString, ',');

        $sql = "UPDATE {$this->table} SET {$fieldString} WHERE {$this->primaryKey} = {$id}";

        if(!$this->db->query($sql, $values)->error()){
            return true;
        }

        return false;
    }

    public function delete($id){
        $sql = "DELETE FROM {$this->table} WHERE {$this->primaryKey} = {$id}";

        if(!$this->db->query($sql)->error()){
            return true;
        }

        return false;
    }

    public function select($field, $value){
        $sql = "SELECT * FROM {$this->table} WHERE {$field} = ?";

        if($this->db->query($sql, [$value])->count() > 0){
            return $this->db->first();
        }

        return false;
    }

    public function find($params = []){
        $conditionString = '';
        $bind = [];
        $order = '';
        $limit = '';

        // conditions
        if(isset($params['conditions'])){
            if(is_array($params['conditions'])){
                foreach($params['conditions'] as $condition){
                    $conditionString .= ' ' . $condition . ' AND';
                }
                $conditionString = trim($conditionString);
                $conditionString = rtrim($conditionString, ' AND');
            }else{
                $conditionString = $params['conditions'];
            }
            if($conditionString != ''){
                $conditionString = ' WHERE ' . $conditionString;
            }
        }

        // bind
        if(array_key_exists('bind', $params)){
            $bind = $params['bind'];
        }

        // order
        if(array_key_exists('order', $params)){
            $order = ' ORDER BY ' . $params['order'];
        }

        // limit
        if(array_key_exists('limit', $params)){
            $limit = ' LIMIT ' . $params['limit'];
        }

        $sql = "SELECT * FROM {$this->table}{$conditionString}{$order}{$limit}";

        if($this->db->query($sql, $bind)){
            if(!count($this->db->results())){
                return false;
            }
            return $this->db->results();
        }

        return false;
    }

    public function findFirst($params = []){
        if(!$params){
            return false;
        }

        if($this->find($params)){
            return $this->db->first();
        }

        return false;
    }

    public function findById($id){
        return $this->findFirst([
            'conditions' => 'id = ?',
            'bind' => [$id]
        ]);
    }
}