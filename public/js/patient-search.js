$(document).ready(() => {
    function designContainer (link, name, add, parentDiv) {
        var refr = document.createElement('a');
        var cont = document.createElement('div');
        var pati = document.createElement('h3');
        var cons = document.createElement('p');

        $(refr).attr("href", link);
        $(cont).addClass("person-container");
        $(pati).text(name);
        $(cons).text('Last Consulted: ' + add);

        cont.append(pati);
        cont.append(cons);
        refr.append(cont);
        parentDiv.append(refr);
    }

    function getPosts () {
        var container = $('#content');

        $.get('/patient/posts', (data, status) => {
            data.forEach((item, i) => {
                designContainer(item.link, item.name, item.address, container);
            });
        });
    }

    $('#find-doc').keyup(() => {
        var query = $('#find-doc').val();
        var container = $('#content');

        $.get('/patient/posts', {query: query}, (data, status) => {
            data.forEach((item, i) => {
                designContainer(item.link, item.name, item.address, container);
            });
        });
    });

    getPosts();
})