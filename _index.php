<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>
            Portfolio
        </title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./node_modules/sweetalert2/dist/sweetalert2.min.css">
        <link rel="stylesheet" href="./node_modules/toastr/build/toastr.min.css">
    </head>
    <body>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>
                        Portfolio
                    </h1>
                    <p>
                        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#addPortfolioModal">
                            Add Portfolio
                        </a>
                    </p>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Portfolio 1
                                </td>
                                <td>
                                    Description 1
                                </td>
                                <td>
                                    <img src="https://via.placeholder.com/150" alt="Image" class="img-fluid">
                                </td>
                                <td>
                                    <a href="#" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#editPortfolioModal">
                                        Edit
                                    </a>
                                    <a href="#" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#deletePortfolioModal">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    Portfolio 2
                                </td>
                                <td>
                                    Description 2
                                </td>
                                <td>
                                    <img src="https://via.placeholder.com/150" alt="Image" class="img-fluid">
                                </td>
                                <td>
                                    <a href="#" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#editPortfolioModal">
                                        Edit
                                    </a>
                                    <a href="#" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#deletePortfolioModal">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    Portfolio 3
                                </td>
                                <td>
                                    Description 3
                                </td>
                                <td>
                                    <img src="https://via.placeholder.com/150" alt="Image" class="img-fluid">
                                </td>
                                <td>
                                    <a href="#" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#editPortfolioModal">
                                        Edit
                                    </a>
                                    <a href="#" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#deletePortfolioModal">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <script src="./node_modules/jquery/dist/jquery.min.js"></script>
        <script src="./node_modules/jquery-ui/dist/jquery-ui.min.js"></script>
        <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="./node_modules/sweetalert2/dist/sweetalert2.min.js"></script>
        <script src="./node_modules/toastr/build/toastr.min.js"></script>
        <script type="text/javascript">
            $(document).ready(function() {

            });
        </script>
    </body>
</html>