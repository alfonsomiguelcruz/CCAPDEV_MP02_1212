$(document).ready(() => {
    function designContainer (link, name, date, parentDiv) {
        var refr = document.createElement('a');
        var cont = document.createElement('div');
        var pati = document.createElement('h3');
        var cons = document.createElement('p');

        $(refr).attr("href", link);
        $(cont).addClass("person-container");
        $(pati).text(name);
        $(cons).text('Last Consulted: ' + date);

        cont.append(pati);
        cont.append(cons);
        refr.append(cont);
        parentDiv.append(refr);
    }

    function getPosts () {
        var container = $('#content');
        
        $.get('/doctor/posts', {}, (data, status) => {
            if(data === '' || data == '')
                $('#content').val("No Patient Found.");
            else {
                data.forEach((item, i) => {
                    designContainer(item.link, item.name, item.date, container);
                });
            }
            
        });
    }

    $('#find-pat').keyup(() => {
        var query = $('#find-pat').val();
        var container = $('#content');

        $.get('/doctor/posts', {query: query}, (data, status) => {
            if(data === '' || data == '')
                $('#content').val("No Patient Found.");
            else {
                data.forEach((item, i) => {
                    designContainer(item.link, item.name, item.date, container);
                });
            }
        });
    });

    getPosts();
})