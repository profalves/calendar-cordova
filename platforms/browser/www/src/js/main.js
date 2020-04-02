const modal = document.getElementById('modal')

function openModal() {
  modal.style = ''
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

function registerServiceWorker() {
  // registrando o service worker para navegadores com suporte
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/' }).then(() => {
      console.log('Service Worker registrado com sucesso.');
    }).catch(error => {
      console.log('Service Worker falhou:', error);
    });
  }
}