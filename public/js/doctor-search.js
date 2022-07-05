$(document).ready(() => {
    function designContainer (name, date, parentDiv) {
        // var refr = document.createElement('a');
        var cont = document.createElement('div');
        var pati = document.createElement('h3');
        var cons = document.createElement('p');

        // $(refr).attr("href", link);
        $(cont).addClass("person-container");
        $(pati).text(name);
        $(cons).text('Last Consulted: ' + date);

        $(cont).append(pati);
        $(cont).append(cons);
        // refr.append(cont);
        $(parentDiv).append(cont);
    }

    function initPosts () {
        var container = $('#content');

        $.get('/doctor/posts/init', {}, (data, status) => {
            console.log(data);
            if(data.length === 0) {
                $('#content-msg').text("No Patient Found.");
            } else {
                for(var i = 0; i < data.length; i++) {
                    designContainer(data[i].patient, data[i].date, container);
                }       
            }
            
        });
    }

    $('#find-pat').keyup(() => {
        var query = $('#find-pat').val();
        var container = $('#content');
        
        if (container.is(':empty')) {
            initPosts();
        } else {
            container.empty();
            $.get('/doctor/posts', {query: query}, (data, status) => {
                if(data.length === 0) {
                    $('#content-msg').text("No Patient Found.");
                } else {
                    for(var i = 0; i < data.length; i++) {
                        designContainer(data[i].patient, data[i].date, container);
                    }
                }
            });
        }
    });

    initPosts();
})