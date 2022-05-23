//recebendo nome, latitude e longitude
const form = document.getElementById('addres-form');
const addresList = document.getElementById('addres-List');

//adicionando itens a lista de endereços
form.onsubmit = function (e) {
    e.preventDefault();
    const nomeLocal = document.getElementById("nome").value;
    const lat = document.getElementById("latitude").value;
    const long = document.getElementById("longitude").value;
    let description = nomeLocal + " | " + lat + " | " + long;
    addAdress(description);
    form.reset();
};

function addAdress(description) {
    const addresConta = document.createElement('div');
    const addresLabel = document.createElement('label');
    const addresDescription = document.createTextNode(description);
    addresLabel.setAttribute('for', description);
    addresLabel.appendChild(addresDescription);
    addresConta.classList.add('addres-item');
    addresConta.appendChild(addresLabel);
    addresList.appendChild(addresConta);
}

//mapa
var mapOptions = {
    //coordenadas, zoom 
    center: [-14.5916681, -51.212021],
    zoom: 4
}
var map = new L.map('map', mapOptions);
//definindo o layout do mapa, com mais opções na biblioteca Leaflet
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

//adiconando o marcador ao mapa
function addMaker() {
    //recebendo valores aonde serão adicionados os marcadores
    const nomeLocal = document.getElementById("nome").value;
    const lat = document.getElementById("latitude").value;
    const long = document.getElementById("longitude").value;
    //adiconando marcador ao mapa
    var marker = new L.Marker([lat, long]);
    marker.bindPopup(`${nomeLocal}`).openPopup();
    marker.addTo(map);
    //centralizando o mapa no novo endereço
    
}

