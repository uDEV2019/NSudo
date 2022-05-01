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
    "url": "404.html",
    "revision": "114092bd0b5737072b083ab89b6ab31f"
  },
  {
    "url": "assets/css/0.styles.ab23c1ca.css",
    "revision": "b3f86be3bde274b03a48a0f192e46ca1"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "ff8e219dc6eb11a32085833879ce5e14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.01957421.js",
    "revision": "e3cefc6b3cf0ceaed5221e4e3b66eb54"
  },
  {
    "url": "assets/js/11.9e91be25.js",
    "revision": "3a06fbffae66f178c8f67c58d1421891"
  },
  {
    "url": "assets/js/12.b55a300d.js",
    "revision": "04ad4ef351972e9c2c76a003b35c1588"
  },
  {
    "url": "assets/js/13.bb68e186.js",
    "revision": "c4dc73a4ed5d7b08fdeac24ca4a9d8c1"
  },
  {
    "url": "assets/js/14.40656faf.js",
    "revision": "9344f2b3a484b8588629e8f03d755219"
  },
  {
    "url": "assets/js/15.48985194.js",
    "revision": "b11378b72a4bd94bb8a9d677b089df71"
  },
  {
    "url": "assets/js/16.f84aff00.js",
    "revision": "3c2e528dd1179b5dcf045fc0944f9505"
  },
  {
    "url": "assets/js/17.b7e27c7e.js",
    "revision": "15682011375d37ebfc6797fb8ab9a76d"
  },
  {
    "url": "assets/js/18.c03ecb62.js",
    "revision": "f0d8e416bf91cd2217d62b765e2df0fd"
  },
  {
    "url": "assets/js/19.13454540.js",
    "revision": "f7b2e320ffe0115dcc35553378ba1148"
  },
  {
    "url": "assets/js/2.06c3efad.js",
    "revision": "ce10438b59e47c838f808cbdcd61ef00"
  },
  {
    "url": "assets/js/20.dab42696.js",
    "revision": "1506cd272b6c3931782e02ea288ac2bb"
  },
  {
    "url": "assets/js/21.e2d67ca3.js",
    "revision": "0569601ea51a6bf067fca4b5ee9bc732"
  },
  {
    "url": "assets/js/22.addb0317.js",
    "revision": "1b07c9297c806dc0dc139ed24d3fdfb3"
  },
  {
    "url": "assets/js/23.27373a60.js",
    "revision": "7d4e469675ecc55c422a7abfc0ba4092"
  },
  {
    "url": "assets/js/24.182855be.js",
    "revision": "53d956416d0de5df6345218523649a0d"
  },
  {
    "url": "assets/js/25.7970c46e.js",
    "revision": "703e66d463e176a4f188c1855026cdf4"
  },
  {
    "url": "assets/js/26.e3dbf761.js",
    "revision": "4fb188f2f30c68c284e1d559eba6c996"
  },
  {
    "url": "assets/js/27.3d4d90cb.js",
    "revision": "18d4eea118b6453e546deb3982f8fc44"
  },
  {
    "url": "assets/js/28.2f4c60b7.js",
    "revision": "e301e34c807ae457fa18a5188987ef67"
  },
  {
    "url": "assets/js/29.f8a90f95.js",
    "revision": "ce0bef57eda08dc7f55604122582df54"
  },
  {
    "url": "assets/js/3.5d8d6e25.js",
    "revision": "2a7c8d38ef7ce73d9b5753addf8af9af"
  },
  {
    "url": "assets/js/30.971ba102.js",
    "revision": "961bf68f53f1835b25ab655f822149c3"
  },
  {
    "url": "assets/js/31.60104c5c.js",
    "revision": "3571563c46e46ce0fd8d82401cb5729d"
  },
  {
    "url": "assets/js/32.c731fb6f.js",
    "revision": "80f3d09bb09797037363bef6d8d30ef6"
  },
  {
    "url": "assets/js/33.d1657850.js",
    "revision": "dab29c17cf5fa114605239b4bdf49b0e"
  },
  {
    "url": "assets/js/34.e923e579.js",
    "revision": "6630d513a929e962bf7428c827456b16"
  },
  {
    "url": "assets/js/35.52cb48f5.js",
    "revision": "9133226694be24e07029768c7c4b5e35"
  },
  {
    "url": "assets/js/36.e674b900.js",
    "revision": "36476ffd199a770b802ab6b447552c0e"
  },
  {
    "url": "assets/js/4.6d042776.js",
    "revision": "4be48af012d9c5315d0d0c13e97c7e5e"
  },
  {
    "url": "assets/js/5.8d4898c6.js",
    "revision": "19c191bd300e4f12bae2088acec10e85"
  },
  {
    "url": "assets/js/6.9829e4ec.js",
    "revision": "7ee940b316b37b49bca6ed1b16610936"
  },
  {
    "url": "assets/js/7.8bd9e298.js",
    "revision": "be85c83dd3aac93df1faf4fa7ee7bf69"
  },
  {
    "url": "assets/js/8.ad86aa69.js",
    "revision": "1b33c6e13ddc29dc038bd0a626269064"
  },
  {
    "url": "assets/js/9.ab626035.js",
    "revision": "0e362b168ca450b4dcf9f333facecd88"
  },
  {
    "url": "assets/js/app.b11a9085.js",
    "revision": "5271667a804defa40c8ef26900e7f821"
  },
  {
    "url": "en-us/docs/Changelog.html",
    "revision": "0692c34ac34f2297af7d49dd91e28a22"
  },
  {
    "url": "en-us/docs/DevilMode.html",
    "revision": "baf8663fcb4cb0e71fe1399b869c5ae7"
  },
  {
    "url": "en-us/docs/index.html",
    "revision": "087cfa334b1fec5a7dfc73110287a985"
  },
  {
    "url": "en-us/docs/SharedLibrary.html",
    "revision": "51b68f55dcc4948a33b885af99847b73"
  },
  {
    "url": "en-us/Download.html",
    "revision": "d6549f46487b4932e4760cb6418225ce"
  },
  {
    "url": "en-us/index.html",
    "revision": "7209bb34287e9579403ceba5f01b8efc"
  },
  {
    "url": "en-us/Support.html",
    "revision": "97549b69b889bc6cd87f19a25301c65b"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "6f307a41d1c82c49591472917e7fce61"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "07056e63c6cb5b4c9d4e3eb5f67001a1"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "cd25bd828a48a90d79e518778b9236a7"
  },
  {
    "url": "index.html",
    "revision": "f3e720f65f1e79c0fda87b5b83a58b35"
  },
  {
    "url": "ru-ru/docs/Changelog.html",
    "revision": "00e46f69f3aa6b3a3aba860bcb4fa7cb"
  },
  {
    "url": "ru-ru/docs/DevilMode.html",
    "revision": "f6ac995ca85c3e8dbddf9a473341cecd"
  },
  {
    "url": "ru-ru/docs/index.html",
    "revision": "fed989e5ee84402f7e2cbde97af0bbed"
  },
  {
    "url": "ru-ru/docs/SharedLibrary.html",
    "revision": "5a24857d16b1916fb34351ec1b664de8"
  },
  {
    "url": "ru-ru/Download.html",
    "revision": "4af8f79b951d999adbb78762d3ba30d9"
  },
  {
    "url": "ru-ru/index.html",
    "revision": "e08bc081d2fa6a8940daaec29288dd62"
  },
  {
    "url": "ru-ru/Support.html",
    "revision": "3d9e7390e5496892da1d36eab56033d2"
  },
  {
    "url": "zh-hans/docs/Changelog.html",
    "revision": "9d0fda641e74a6e7fb4dd3da9ace9a46"
  },
  {
    "url": "zh-hans/docs/DevilMode.html",
    "revision": "3f62e0ca6022cda15c97aeb534cba5bc"
  },
  {
    "url": "zh-hans/docs/index.html",
    "revision": "13b590abcac12f3e53d0e707b7989f6e"
  },
  {
    "url": "zh-hans/docs/SharedLibrary.html",
    "revision": "8493cde5d096e90df5affac42c8f519c"
  },
  {
    "url": "zh-hans/Download.html",
    "revision": "c3c0d4230f76b7faa3da8fb4e8c51769"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "b2c5bdb282ed117985d61ef4fa47f514"
  },
  {
    "url": "zh-hans/Support.html",
    "revision": "e0affe6cfd2030cf19c9fe15d5b2e386"
  },
  {
    "url": "zh-hant/docs/Changelog.html",
    "revision": "91fd31b22b18a7a63c6624ba101a95e9"
  },
  {
    "url": "zh-hant/docs/DevilMode.html",
    "revision": "0a3e06d91e2ae91527451b7820323acf"
  },
  {
    "url": "zh-hant/docs/index.html",
    "revision": "7fe1e3bf18ebad1e3f6eedcf033f77fc"
  },
  {
    "url": "zh-hant/docs/SharedLibrary.html",
    "revision": "6e6dff5a7c8d6c0a0f718287bd43c3df"
  },
  {
    "url": "zh-hant/Download.html",
    "revision": "67eec55df0511a674fb0fa33bd55f234"
  },
  {
    "url": "zh-hant/index.html",
    "revision": "9993f4fcd8d14b620e1f954fb3e74d65"
  },
  {
    "url": "zh-hant/Support.html",
    "revision": "0c9f2fe7da27848f4061a86ddea83beb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
