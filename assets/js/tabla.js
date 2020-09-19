const tabla = document.getElementById("tabla");

const tablafuncion = () => {
    const artistas = JSON.parse(localStorage.getItem("artista"));
    for (let i = 0; i < artistas.length; i++) {
        tabla.innerHTML += `
        <tr>
          <th>${i+1}</th>
          <td>${artistas[i].nombre}</td>
          <td>${artistas[i].album}</td>
          <td>${artistas[i].edad}</td>
        </tr>`
    }
}
tablafuncion();

const limpiar  = document.getElementById("limpiar");
limpiar.addEventListener("click",()=>{
    localStorage.clear();
})
