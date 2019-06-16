/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "3rdpartylicenses.txt",
    "revision": "a2bee53330aff675a88d14ca4a121fa7"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "8b5b1f79f686cb42e1c8b9e627243f87"
  },
  {
    "url": "main.259ea181c328458c06dc.js",
    "revision": "d552b5ddbe5eb668ba5fdbe64c216923"
  },
  {
    "url": "polyfills.3bfd66addbd0d2814591.js",
    "revision": "f61fab6f423084665a6db849a49b762d"
  },
  {
    "url": "runtime.ec2944dd8b20ec099bf3.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "styles.3ff695c00d717f2d2a11.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
