
/* Se crea la siguiente cb que crea la lista de amigos
la cual recibe como argumento amigos desde el servidor.. 
*/
const listaDeAmigos = (amigos) => {
    for (const persona of amigos) {
        $(`<div>
        <p>${persona.id} ${persona.name}</p>
        </div>`).appendTo("#lista") 
    };
};

/* BOTÓN VER AMIGOS: llama a la cb listaDeAmigos y muestra la lista de los amigos en la ventana HTML*/
$('#boton').click(() => {
    $("#lista").empty();
    $.get("http://localhost:5000/amigos/", listaDeAmigos);
});

/* BOTÓN BUSCAR: recibe un input desede el id y busca a un amigo, después muestra el amigo en la ventana HTML*/
$('#search').click(() => {
    const id = $('input')[0].value;
    $.get(`http://localhost:5000/amigos/${id}`, (amigos) =>{
        $(`<div>
        <p>${amigos.id} ${amigos.name}</p>
        </div>`).appendTo("#amigo") 
    })
});

/* BOTÓN DELETE: recibe un input desede el id y elimina a un amigo, después actualiza la lista en la ventana de HTML*/
$('#delete').click(() => {
    const id = $('#inputDelete')[0].value;
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: (amigos) => {
            alert("AMIGO ELIMINADO");
            $("#lista").empty();
            listaDeAmigos(amigos);
        }
    });
});

