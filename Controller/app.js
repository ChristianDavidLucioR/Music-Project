//DATOS DE LA APP
const contenedorListaMusic=document.getElementById('lista-music');

const controles=document.getElementById('controles');

const menuMusic=document.getElementById('menuMusic');
const titlePlaylist=document.getElementById('titlePlaylist');
const playDescription=document.getElementById('playDescription');
const imgAlbum=document.getElementById('imgAlbum');
const album=document.getElementById('album');

//EVENTOS
const btnReaccion=document.getElementById('reaccion'); //EVENTO REACCION DEL CORAZON
menuMusic.addEventListener('click',cargarInfo); // EVENTO DEL MENU LISTA DE REPRODUCION

/*Funcion Boton Corazon*/
btnReaccion.addEventListener('click',likear);
let estado= 0;
function likear (){
    if (estado==0){
        btnReaccion.classList.add('reaccion-activa');
        estado=1;
    }else if (estado===1){
        btnReaccion.classList.remove('reaccion-activa');
        estado=0
    }
}
/*Funcion Cargar informacion*/
function cargarInfo (e){
    let jsonurl='';
    let titlePlay='';
    let descripcionPlay ='';
    let srcImg='';

    if(e.target.classList.contains('playEstudiar')){
        jsonurl='../Model/musicJSON/estudiando.json';
        titlePlay='Play List para estudiar';
        descripcionPlay='La mejor Música para estudiar';
        srcImg='../images/imgEstudiar.jpg';
        album.style.background="linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(../images/imgEstudiar.jpg)";

    }else if(e.target.classList.contains('playRock')){
        jsonurl='../Model/musicJSON/rock.json';
        titlePlay='Play List para Rockear';
        descripcionPlay='La mejor Música para Rockear';
        srcImg='../images/imgRock.jpg';
        album.style.background="linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(../images/imgRock.jpg)";
    
    }else if(e.target.classList.contains('playDeporte')){
        jsonurl='../Model/musicJSON/deporte.json';
        titlePlay='Play List para hacer deporte';
        descripcionPlay='La mejor Música para hacer deporte';
        srcImg='../images/imgSport.jpg';
        album.style.background="linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(../images/imgSport.jpg)";
    }
    titlePlaylist.innerHTML=titlePlay;
    playDescription.innerHTML=descripcionPlay;
    imgAlbum.src=srcImg;
    
    cargarMusica(jsonurl);
}
//FUNCION CARGAR MUSICA 
function cargarMusica (url){
    fetch(url)
        .then (function(res) {
            return res.json();
        })

        .then(function(data){
            let html ='';
            data.array.forEach(music => {
                html +=`
                <li class="music">
                <input type="text" value="${music.url}" style="display: none;">
                <a href="#" id="${music.id}" class="btn play-music"><i class="fas fa-play-circle"></i></a>
                <a href="#" class="btn play-music"><i class="fas fa-play-circle"></i></a>
                <h3>${music.artista}</h3> 
                <h3 class="name" id="name">${music.nombre}</h3> 
                <h3 class="time">--</h3>
            </li>
                `
                contenedorListaMusic.innerHTML=html;
            });    
    });
}