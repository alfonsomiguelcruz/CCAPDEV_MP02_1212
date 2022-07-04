$(document).ready(function () {
    $('#submit').click(()=>{
        var email = $('#d_email').val();
        var password = $('#d_password').val();
        var input = {
            d_email: email,
            d_password: password
        };
        
        //TODO: Alert user when login is unsuccessful
        $.post('/doctor/check', input, () => {
            console.log("Successful");
        });        
    });
});