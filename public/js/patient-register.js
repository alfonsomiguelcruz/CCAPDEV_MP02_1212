$(document).ready(() => {
    function isEmail (email) {
        return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
    }

    function validatePassword (field, fieldName, error) {
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty)
            error.text('Please input your ' + fieldName + '.');
        else {
            if(value.length >= 8)
                error.text('');
            else
                error.text(fieldName + ' must be 8 characters minimum');
        }
    }

    function validateEmail (field, fieldName, error) {
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty)
            error.text('Please input your ' + fieldName + '.');
        else {
            if(isEmail(value))
                error.text('');
            else
                error.text(fieldName + ' must be a valid email');
        }
    }

    function validateField(field, fieldName, error) {
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty)
            error.text('Please input your ' + fieldName + '.');
        else
            error.text('');
    }


    $('#p_fname').keyup(() => {
        validateField($('#p_fname'), 'First Name', $('#p_fname_error'));
    });

    $('#p_mname').keyup(() => {
        validateField($('#p_mname'), 'Middle Name', $('#p_mname_error'));
    });

    $('#p_lname').keyup(() => {
        validateField($('#p_lname'), 'Last Name', $('#p_lname_error'));
    });

    $('#p_bday').keyup(() => {
        validateField($('#p_bday'), 'Birthday', $('#p_bday_error'));
    });

    $('#weight').keyup(() => {
        validateField($('#weight'), 'Weight', $('#weight_error'));
    });

    $('#height').keyup(() => {
        validateField($('#height'), 'Height', $('#height_error'));
    });

    $('#p_email').keyup(() => {
        validateEmail($('#p_email'), 'Email', $('#p_email_error'));
    });

    $('#p_password').keyup(() => {
        validatePassword($('#p_password'), 'Password', $('#p_password_error'));
    });
});