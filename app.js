// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];

function agregarAmigo(){ 
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

if (!nombreAmigo){
    alert("Por favor, ingresa un nombre.");
    return;
}
amigo.push(nombreAmigo);
inputAmigo.value = "";
inputAmigo.focus();
renderizarAmigos();
}
function renderizarAmigos(){
let listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML = "";
for(let i = 0; i < amigo.length; i++){
    let item = document.createElement("li");
    item.textContent = amigo [i];
    listaAmigos.appendChild(item);
}
}

function sortearAmigo() {
    if (amigo.length === 0){
    alert("No hay amigos que sortear");    
    return; 
}
let amigoSorteado = amigo[Math.floor(Math.random() *amigo.length)];
let resultado = document.getElementById("resultado");
resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`; 

let limpiarLista = document.getElementById("listaAmigos");
limpiarLista.innerHTML = "";
}    
nombresMostrados = []; // Vaciar la lista de nombres mostrados
actualizarListaAmigos(); // Actualizar la lista en la página
const resultado = document.getElementById("resultado");
resultado.innerHTML = ""; // Limpiar el resultado
       
 