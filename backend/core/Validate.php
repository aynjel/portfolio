<?php

namespace backend\core;

use backend\core\{Database, H};

class Validate{

    private $_passed = false,
            $_errors = [],
            $_db = null;

    public function __construct(){
        $this->_db = Database::getInstance();
    }

    public function check($source, $items = []){
        foreach($items as $item => $rules){
            foreach($rules as $rule => $rule_value){
                $value = trim($source[$item]);
                $item = H::sanitize($item);

                if($rule === 'required' && empty($value)){
                    $this->addError("{$rules['display']} is required.");
                }else if(!empty($value)){
                    switch($rule){
                        case 'min':
                            if(strlen($value) < $rule_value){
                                $this->addError("{$rules['display']} must be a minimum of {$rule_value} characters.");
                            }
                        break;
                        case 'max':
                            if(strlen($value) > $rule_value){
                                $this->addError("{$rules['display']} must be a maximum of {$rule_value} characters.");
                            }
                        break;
                        case 'matches':
                            if($value != $source[$rule_value]){
                                $matchDisplay = $items[$rule_value]['display'];
                                $this->addError("{$matchDisplay} and {$rules['display']} must match.");
                            }
                        break;
                        case 'unique':
                            $check = $this->_db->query("SELECT {$item} FROM {$rule_value} WHERE {$item} = ?", [$value]);
                            if($check->count()){
                                $this->addError("{$rules['display']} already exists.");
                            }
                        break;
                    }
                }
            }
        }

        if(empty($this->_errors)){
            $this->_passed = true;
        }

        return $this;
    }

    private function addError($error){
        $this->_errors[] = $error;
    }

    public function errors(){
        return $this->_errors;
    }

    public function passed(){
        return $this->_passed;
    }
}