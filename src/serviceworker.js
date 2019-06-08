if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => registerSW());
}

function registerSW() {
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.info('SW registration successful: ', registration, ' ', '😍');
    }, (err) => {
      console.error('SW registration failed: 😠', err);
    });
}

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/dist/service-worker.js').then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }