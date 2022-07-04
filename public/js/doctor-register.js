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

    function validateID(field, fieldName, error) {
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty)
            error.text('Please input your ' + fieldName + '.');
        else {
            if(value.length == 8)
                error.text('');
            else
                error.text(fieldName + ' must be 8 characters long.');
        }
            
    }

    $('#d_fname').keyup(() => {
        validateField($('#d_fname'), 'First Name', $('#d_fname_error'));
    });

    $('#d_mname').keyup(() => {
        validateField($('#d_mname'), 'Middle Name', $('#d_mname_error'));
    });

    $('#d_lname').keyup(() => {
        validateField($('#d_lname'), 'Last Name', $('#d_lname_error'));
    });

    $('#d_bday').keyup(() => {
        validateField($('#d_bday'), 'Birthday', $('#d_bday_error'));
    });

    $('#d_address').keyup(() => {
        validateField($('#d_address'), 'Address', $('#d_address_error'));
    });

    $('#docid').keyup(() => {
        validateID($('#docid'), 'Doctor ID', $('#docid_error'));
    });

    $('#titles').keyup(() => {
        validateField($('#titles'), 'Titles', $('#d_titles_error'));
    });

    $('#specs').keyup(() => {
        validateField($('#specs'), 'Specialization', $('#d_specs_error'));
    });

    $('#off_address').keyup(() => {
        validateField($('#off_address'), 'Office Address', $('#off_address_error'));
    });

    $('#d_email').keyup(() => {
        validateEmail($('#d_email'), 'Email', $('#d_email_error'));
    });

    $('#d_password').keyup(() => {
        validatePassword($('#d_password'), 'Password', $('#d_password_error'));
    });
});