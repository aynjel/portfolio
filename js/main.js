
$("#profile-img").on('dblclick', function(){

    Swal.fire({
        title: 'Login',
        html:
            '<input id="swal-username" placeholder="Username" class="swal2-input">' +
            '<input id="swal-password" placeholder="Password" class="swal2-input">',
        focusConfirm: false,
        cancelButtonText: 'Cancel',
        showCancelButton: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Login',
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
        }
    }).then((result) => {

        if (result.value) {
            if(result.value.status == "success"){
                Swal.fire({
                    title: 'Logged in successfully!',
                    icon: 'success',
                    html: `
                        <p>Username: ${result.value.username}</p>
                        <p>Password: ${result.value.password}</p>
                    `,
                })
            }else{
                Swal.fire({
                    title: 'Login failed!',
                    icon: 'error',
                    timer: 1500,
                    showConfirmButton: false
                })
            }
        }
    })
    
});


