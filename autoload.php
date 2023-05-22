<?php

    function loadClass($className) {

        if (false !== ($lastNsPos = strripos($className, '\\'))) {
            $className = substr($className, $lastNsPos + 1);
        }
        
        if (file_exists('backend/core/' . $className . '.php')) {
            require('backend/core/' . $className . '.php');
        } elseif (file_exists('../backend/core/' . $className . '.php')) {
            require('../backend/core/' . $className . '.php');
        } elseif (file_exists('backend/model/' . $className . '.php')) {
            require('backend/model/' . $className . '.php');
        } elseif (file_exists('../backend/model/' . $className . '.php')) {
            require('../backend/model/' . $className . '.php');
        } else{
            die('Class ' . $className . ' not found');
        }
    }
    spl_autoload_register('loadClass'); // Registers the autoloader
