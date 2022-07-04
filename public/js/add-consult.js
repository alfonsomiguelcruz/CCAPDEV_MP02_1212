$(document).ready(() => {
    var today = new Date();
	var today = today.getFullYear().toString() + '-' 
                + (today.getMonth() + 1).toString().padStart(2, 0) + '-'
                + today.getDate().toString().padStart(2, 0);
	$('#date').val(today);

})