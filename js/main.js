
$(document).ready(function () {
    
    $("#profile-img").on('dblclick', function(){

        Swal.fire({
            title: 'LOGIN ADMIN',
            html:
                '<input id="swal-username" placeholder="Username" class="swal2-input">' +
                '<input type="password" id="swal-password" placeholder="Password" class="swal2-input">',
            focusConfirm: false,
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: '<i class="bi bi-box-arrow-in-right"></i> Login',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showLoaderOnConfirm: true,
            preConfirm: () => {
                const user = $('#swal-username').val()
                const pass = $('#swal-password').val()
                return fetch(`./backend/admin/login.php/?username=${user}&password=${pass}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then((result) => {
            if(result.value){
                if(result.value.status == "success"){
                    Swal.fire({
                        title: result.value.message,
                        icon: 'success',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        html: `
                            <div class="text-center">
                                <h3 class="text-success">Welcome ${result.value.data.username}!</h3>

                                <img src="./uploads/img/admin/1.jpg" class="img-fluid rounded h-25 w-25 mb-3" alt="Profile Image">

                                <p>${result.value.data.nickname}</p>
                                <p>${result.value.data.email}</p>
                            </div>
                        `,
                    })
                }else{
                    Swal.fire({
                        title: result.value.message,
                        icon: 'error',
                    })
                }
            }else{
                Swal.fire({
                    title: 'Login Cancelled',
                    icon: 'error',
                })
            }
        }).catch((error) => {
            Swal.showValidationMessage(
                `Request failed: ${error}`
            )
        })
        
    });
});