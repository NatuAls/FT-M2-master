$('#boton').click(function(){
    let i = 0;
    $('#lista').text('');
    $('#amigo').text('');
    $('#input').val('');
    $('#success').text('');
    $('#inputDelete').val('');
    $.get('http://localhost:5000/amigos/', function(friends) {
        while(i < friends.length){
            let id = friends[i].id;
            let li = document.createElement('li');
            li.id = id;
            li.textContent =  `${id}. ${friends[i].name} X`;
            $('#lista').append(li);
            i++;
        }
    });
});

$('#search').click(function(){
    let i = $('#input').val();
    if (!isNaN(i)) {
        let aux = $.get('http://localhost:5000/amigos/' + i, function(friend){
            $('#amigo').text(friend.name);
        });
        if(!aux.length) $('#amigo').text(`No se encuentra el id`);
    } else {
        $('#amigo').text(`Por favor ingrese el id`);
    }
});

$('#delete').click(function(){
    let i = $('#inputDelete').val();
    let friend;
    if (!isNaN(i)) {
        let aux = $.get('http://localhost:5000/amigos/' + i, function(deleted){
            friend = deleted;
            $.ajax({
            url: 'http://localhost:5000/amigos/' + i,
            type: 'DELETE',
            success: function(){
            $('#success').text(`Tu amigo ${friend.name} fue borrado con exito`);
            }
            });
        });
        if(!aux.length) $('#success').text(`No se encuentra el id`);
    } else {
        $('#success').text(`Por favor ingrese el id`);
    }
});