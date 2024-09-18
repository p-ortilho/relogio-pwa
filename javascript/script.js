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

// Verifica se o navegador suporta Service Workers.
if ('serviceWorker' in navigator) {

    // Registra o arquivo 'service-worker.js' localizado na pasta 'javascript'.
    navigator.serviceWorker.register('./javascript/service-worker.js')

        // Se o registro for bem-sucedido, executa o código dentro do `then`.
        .then(function(registration) {

            // Exibe no console uma mensagem de sucesso com o escopo do Service Worker registrado.
            console.log('Service Worker registrado com sucesso:', registration.scope);

        })

        // Se ocorrer algum erro durante o registro, o `catch` é executado.
        .catch(function(error) {

            // Exibe no console uma mensagem de erro com detalhes do que ocorreu.
            console.log('Falha ao registrar o Service Worker:', error);
            
        });

}
