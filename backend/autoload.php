<?php

function loadClass($className) {

    if (false !== ($lastNsPos = strripos($className, '\\'))) {
        $className = substr($className, $lastNsPos + 1);
    }
    
    if (file_exists('core/' . $className . '.php')) {
        require('core/' . $className . '.php');
    } elseif (file_exists('../core/' . $className . '.php')) {
        require('../core/' . $className . '.php');
    } elseif (file_exists('model/' . $className . '.php')) {
        require('model/' . $className . '.php');
    } elseif (file_exists('../model/' . $className . '.php')) {
        require('../model/' . $className . '.php');
    } else{
        die('Class ' . $className . ' not found');
    }
}
spl_autoload_register('loadClass');