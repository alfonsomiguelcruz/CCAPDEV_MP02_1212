$(document).ready(() => {
    function designContainer (name, add, parentDiv) {
        // var refr = document.createElement('a');
        var cont = document.createElement('div');
        var pati = document.createElement('h3');
        var cons = document.createElement('p');

        // $(refr).attr("href", link);
        $(cont).addClass("person-container");
        $(pati).text(name);
        $(cons).text('Last Consulted: ' + add);

        cont.append(pati);
        cont.append(cons);
        // refr.append(cont);
        parentDiv.append(cont);
    }

    function initPosts () {
        var container = $('#content');

        $.get('/patient/posts/init', {}, (data, status) => {
            if(data.length === 0) {
                $('#content-msg').text("No Doctor Found.");
            } else {
                for(var i = 0; i < data.length; i++) {
                    designContainer(data[i].doctor, data[i].date, container);
                }
            }
        });
    }

    $('#find-doc').keyup(() => {
        var query = $('#find-doc').val();
        var container = $('#content');

        $.get('/patient/posts', {query: query}, (data, status) => {
            if(data.length === 0) {
                $('#content-msg').text("No Dcctor Found.");
            } else {
                for(var i = 0; i < data.length; i++) {
                    designContainer(data[i].doctor, data[i].date, container);
                }
            }
        });
    });

    initPosts();
})