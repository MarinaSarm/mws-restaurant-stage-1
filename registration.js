//service worker register
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'}).then(function() {
    console.log('Registration of service worker worked!');
  }).catch(function() {
    console.log('Registration of service worker failed!');
  });
}
