let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');

setInterval(function relogio(){
    // Objeto do tipo data
    let time = new Date();

    // Pega cada elemento do objeto data
    let hr = time.getHours();
    let mt = time.getMinutes();
    let sg = time.getSeconds();

    // Acrescenta zero ao número entre 0 e 9
    if(hr < 10) hr = '0' + hr;
    if(mt < 10) mt = '0' + mt;
    if(sg < 10) sg = '0' + sg;

    horas.textContent = hr;
    minutos.textContent = mt;
    segundos.textContent = sg;
})