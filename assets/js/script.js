const form = document.getElementById("form");
const registro = document.getElementById("registro")
let lista=[];
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inombre = document.getElementById("nombre").value;
    const ialbum = document.getElementById("album").value;
    const iedad =  document.getElementById("edad").value;

    const alertNombre = document.getElementById("alertNombre");
    const alertAlbum = document.getElementById("alertAlbum");
    const alertEdad = document.getElementById("alertEdad");

    if(inombre==''){
        alertNombre.innerText=('Por favor llene el campo');
    }
    if(ialbum==''){
        alertAlbum.innerText=('Por favor llene el campo');
    }
    if(iedad<0 || iedad ==''){
        alertEdad.innerText=('Por favor llene el campo');
    }
    if(inombre != '' && ialbum != '' && iedad>0){
        swal("Agregado!", "", "success");
        const artista={
            nombre:inombre,
            album:ialbum,
            edad:iedad
        }
        losArtistas(artista);
        registro.innerHTML='Puede ver los datos en la lista'
    }
})


const losArtistas = (artista)=>{
    if(localStorage.getItem('artista')==null){
        lista.push(artista)
        const artistaLS = JSON.stringify(lista);
        localStorage.setItem('artista',artistaLS);
    }else{
        lista=JSON.parse(localStorage.getItem("artista"));
        lista.push(artista);
        const artistaLS = JSON.stringify(lista);
        localStorage.setItem('artista',artistaLS)
    }
}