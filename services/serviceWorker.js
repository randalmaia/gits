const setupServiceWorker = () => {
  console.log('aaaa setupServiceWorker');
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/static/service-worker.js')
             .then(function() { console.log("Service Worker Registered"); });
  }
}

export default {
  setupServiceWorker
}