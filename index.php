<?php
require('./autoload.php');

use backend\core\Request;

date_default_timezone_set('Asia/Manila');

$page = (Request::get('page')) ? Request::get('page') : 'home';

$title = ucwords(str_replace('-', ' ', $page));

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        <?= $title; ?>
    </title>
    <link href="https://fonts.googleapis.com/css?family=Mukta:300,400,500,600,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/resume_template/assets/vendors/@fortawesome/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="assets/resume_template/assets/css/live-resume.css">
    <!-- <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="./node_modules/bootstrap-icons/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="./node_modules/sweetalert2/dist/sweetalert2.min.css">
    <link rel="stylesheet" href="./node_modules/toastr/build/toastr.min.css">
</head>

<body>
    <header>
        <button class="btn btn-white btn-share ml-auto mr-3 ml-md-0 mr-md-auto"><img src="assets/resume_template/assets/images/share.svg" alt="share" class="btn-img">
            SHARE</button>
        <nav class="collapsible-nav" id="collapsible-nav">
            <a href="index.html" class="nav-link active">HOME</a>
            <a href="portfolio.html" class="nav-link">RESUME</a>
            <a href="blog.html" class="nav-link">PROJECT</a>
            <a href="resume.html" class="nav-link">CONTACT</a>
        </nav>
        <button class="btn btn-menu-toggle btn-white rounded-circle" data-toggle="collapsible-nav"
            data-target="collapsible-nav"><img src="assets/resume_template/assets/images/hamburger.svg" alt="hamburger"></button>
    </header>
    <div class="content-wrapper">
        <aside>
            <div class="profile-img-wrapper">
                <img src="assets/resume_template/assets/images/Profile.png" alt="profile" id="profile-img" class="profile-img">
            </div>
            <h1 class="profile-name">Daisy Murphy</h1>
            <div class="text-center">
                <span class="badge badge-white badge-pill profile-designation">UI / UX Designer</span>
            </div>
            <nav class="social-links">
                <a href="#!" class="social-link"><i class="fab fa-facebook-f"></i></a>
                <a href="#!" class="social-link"><i class="fab fa-twitter"></i></a>
                <a href="#!" class="social-link"><i class="fab fa-behance"></i></a>
                <a href="#!" class="social-link"><i class="fab fa-dribbble"></i></a>
                <a href="#!" class="social-link"><i class="fab fa-github"></i></a>
            </nav>
            <div class="widget">
                <h5 class="widget-title">personal information</h5>
                <div class="widget-content">
                    <p>BIRTHDAY : 15 April 1990</p>
                    <p>WEBSITE : www.example.com</p>
                    <p>PHONE : +1 123 000 4444</p>
                    <p>MAIL : your@example.com</p>
                    <p>Location : California, USA</p>
                    <button class="btn btn-download-cv btn-primary rounded-pill"> <img src="assets/resume_template/assets/images/download.svg" alt="download"
                        class="btn-img">DOWNLOAD CV </button>
                </div>
            </div>
            <div class="widget card">
                <div class="card-body">
                    <div class="widget-content">
                        <h5 class="widget-title card-title">LANGUAGES</h5>
                        <p>English : native</p>
                        <p>Spanish : fluent</p>
                        <p>Italian : fluent</p>
                    </div>
                </div>
            </div>
            <div class="widget card">
                <div class="card-body">
                    <div class="widget-content">
                        <h5 class="widget-title card-title">INTERESTS</h5>
                        <p>Video games</p>
                        <p>Finance</p>
                        <p>Basketball</p>
                        <p>Theatre</p>
                    </div>
                </div>
            </div>
        </aside>
        <main>
            
            <?php

                if(file_exists('./pages/' . $page . '.php')){
                    require('./pages/' . $page . '.php');
                }else{
                    echo '<h1>404</h1>';
                }

            ?>

            <footer>Live Resume @ <a href="https://www.bootstrapdash.com" target="_blank" rel="noopener noreferrer">BootstrapDash</a>. All Rights Reserved 2020</footer>
        </main>
    </div>
    <script src="./node_modules/jquery/dist/jquery.min.js"></script>
    <script src="./node_modules/jquery-ui/dist/jquery-ui.min.js"></script>
    <script src="./node_modules/toastr/build/toastr.min.js"></script>
    <script src="./node_modules/sweetalert2/dist/sweetalert2.min.js"></script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="assets/resume_template/assets/vendors/@popperjs/core/dist/umd/popper-base.min.js"></script>
    <script src="assets/resume_template/assets/js/live-resume.js"></script>
    <script src="./js/main.js"></script>
</body>

</html>