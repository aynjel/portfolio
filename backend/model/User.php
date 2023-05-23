<?php


namespace backend\model;

use backend\core\Model;

class User {
    protected $table = 'users', $db, $error = false;

    public function __construct() {
        $this->db = new Model($this->table);
        $this->db->setPrimaryKey('id');
    }

    public function createUser(array $data) {
        return $this->db->insert($data);
    }

    public function loginUser(array $data) {
        $result = $this->db->findFirst([
            'conditions' => "username = ?",
            'bind' => [$data['username']]
        ]);

        if ($result) {
            if ($data['password'] == $result->password) {
                $this->error = false;
                return $result;
            }
        }

        $this->error = true;
    }

    // get columns
    public function getColumns() {
        return $this->db->getColumns();
    }

    // get all users
    public function getAllUsers() {
        return $this->db->find();
    }

    // get error
    public function error() : bool {
        return $this->error;
    }
}