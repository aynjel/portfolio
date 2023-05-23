<?php

namespace backend\core;

use backend\core\{Config, Database};

class Session {
    private static $sessionStarted = false;

    public static function init() {
        if (self::$sessionStarted == false) {
            session_start();
            self::$sessionStarted = true;
        }
    }

    public static function set($key, $value) {
        $_SESSION[Config::get('session.session_name')][$key] = $value;
    }

    public static function get($key) {
        if (isset($_SESSION[Config::get('session.session_name')][$key])) {
            return $_SESSION[Config::get('session.session_name')][$key];
        }

        return false;
    }

    public static function delete($key) {
        if (isset($_SESSION[Config::get('session.session_name')][$key])) {
            unset($_SESSION[Config::get('session.session_name')][$key]);
        }
    }

    public static function destroy() {
        session_destroy();
    }
}