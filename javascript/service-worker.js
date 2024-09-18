// Escuta o evento 'install' do Service Worker.
// Esse evento é acionado quando o Service Worker é instalado pela primeira vez.
self.addEventListener('install', function(event) {
    
    // Usa o método `waitUntil` para garantir que o Service Worker
    // não finalize a instalação até que o cache esteja completo.
    event.waitUntil(
        
        // Abre (ou cria, se não existir) um cache chamado 'estudo-pwa'.
        caches.open('estudo-pwa').then(function(cache) {
            
            // Adiciona todos os recursos listados ao cache.
            return cache.addAll([
                '/',                  // A página inicial da aplicação.
                '/index.html',        // O arquivo HTML principal.
                '/style/style.css',   // Estilos da página.
                '/style/reset.css',   // Reset de estilos para padronizar o layout.
                '/javascript/script.js', // Arquivo JavaScript.
                '/assets/timeclock.png', // Imagem usada na aplicação.
                '/assets/timeclock.ico'  // Ícone da aplicação.
            ]);
        }).catch(function(error) {
            // Caso ocorra um erro durante o processo de cache, ele será capturado e exibido no console.
            console.error('Falha ao cachear os recursos:', error);
        })
    );
});

// Escuta o evento 'fetch', que é acionado sempre que um recurso é requisitado pela aplicação.
self.addEventListener('fetch', function(event) {
    
    // Intercepta as requisições da rede e tenta responder com os recursos em cache.
    event.respondWith(
        
        // Verifica se o recurso solicitado já está no cache.
        caches.match(event.request).then(function(response) {
            
            // Se o recurso estiver no cache, ele é retornado; caso contrário,
            // a requisição é feita na rede (fetch).
            return response || fetch(event.request);
        })
    );
});
