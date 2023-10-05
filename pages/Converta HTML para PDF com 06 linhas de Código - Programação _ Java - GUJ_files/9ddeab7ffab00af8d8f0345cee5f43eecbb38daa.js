(function () {
  if ('require' in window) {
    require("discourse/lib/theme-settings-store").registerSettings(5, { "theme_uploads": { "logo-header-tablet": "/uploads/default/original/3X/6/c/6c5786a878d70fa1a89841a5d3cf04cdf2a90ab6.svg" } });
  }
})();

setTimeout(function () {
  var banners = document.querySelectorAll(".share-social");
  banners[Math.floor(Math.random() * 4)].style.display = "block";
}, 1000);
// 

!function (f, b, e, v, n, t, s) {
  if (f.fbq) return; n = f.fbq = function () {
    n.callMethod ?
    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script',
  'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3453751608212853');
fbq('track', 'PageView');

