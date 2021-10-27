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
    "revision": "f83735da4cb8536a9fb8fe6ce2f8d661"
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
    "url": "assets/js/10.c1933873.js",
    "revision": "4c734297118cfa3e340815092195f8db"
  },
  {
    "url": "assets/js/11.d62459f2.js",
    "revision": "5c186c42e644d9886bd4bc300c1c8b4f"
  },
  {
    "url": "assets/js/12.9b0fcf11.js",
    "revision": "82e35465422a6a440f0f648d6ce1654c"
  },
  {
    "url": "assets/js/13.fe4c9cef.js",
    "revision": "60abac616aad997653a008ce440154f4"
  },
  {
    "url": "assets/js/14.12a16041.js",
    "revision": "00db1b15048a31be0d1179a2861d7f19"
  },
  {
    "url": "assets/js/15.ec005e73.js",
    "revision": "826d09fcdc77a444a9af6e2f8641fd56"
  },
  {
    "url": "assets/js/16.53fd2f43.js",
    "revision": "3c23749f51f090cca3f96935361849a9"
  },
  {
    "url": "assets/js/17.bf256689.js",
    "revision": "e96bc1cf7154cbe1afa9f33aebe2252c"
  },
  {
    "url": "assets/js/18.9af31b35.js",
    "revision": "a9026964d7eab6da34e5e0189d8fde44"
  },
  {
    "url": "assets/js/19.16a5960d.js",
    "revision": "514da15c0d8a34bd738adaa418ff23f8"
  },
  {
    "url": "assets/js/2.2bf2e7cc.js",
    "revision": "49284ff0b24f74baca705a2cb15488a8"
  },
  {
    "url": "assets/js/20.a095f3f5.js",
    "revision": "068687e84a6b14ed582565d8cdfebffc"
  },
  {
    "url": "assets/js/21.fbc04fb4.js",
    "revision": "aed42d2647c73dd4ba2da935bbdb633f"
  },
  {
    "url": "assets/js/22.a26daf22.js",
    "revision": "717a074aa098904612d255c3d3f7c04b"
  },
  {
    "url": "assets/js/23.69d7760a.js",
    "revision": "1a07038be0f583d15a4aa71e91b9c9a1"
  },
  {
    "url": "assets/js/24.8e9656f6.js",
    "revision": "e82e243523d66f95f71a9578c624011d"
  },
  {
    "url": "assets/js/25.12746a37.js",
    "revision": "6ceb45446992f150c170189971edb5da"
  },
  {
    "url": "assets/js/26.73b6ff31.js",
    "revision": "2fefc1a25bad85f9d6e7a789193d77a8"
  },
  {
    "url": "assets/js/27.482505e5.js",
    "revision": "c8e880b95112a4b495713bd14d648730"
  },
  {
    "url": "assets/js/28.434e1a5c.js",
    "revision": "3864b020cd8d59c71e80e45549c691b0"
  },
  {
    "url": "assets/js/29.60398b61.js",
    "revision": "56139289fea2b6aa567d5988875a379f"
  },
  {
    "url": "assets/js/3.08a189ad.js",
    "revision": "3a5950bf8e3e28df8a0fe46fd553dbc8"
  },
  {
    "url": "assets/js/4.18bad379.js",
    "revision": "46c8cdee43d5b73a07c4264afd89914a"
  },
  {
    "url": "assets/js/5.13ed8bd6.js",
    "revision": "5af073f57a50e2f670b094c8db647413"
  },
  {
    "url": "assets/js/6.74645ea0.js",
    "revision": "0563491ddcc9da8eb1fb96fee43de2d0"
  },
  {
    "url": "assets/js/7.3db2b0da.js",
    "revision": "5c97b00c16afe3667242e973bf05e045"
  },
  {
    "url": "assets/js/8.5b0b51a4.js",
    "revision": "378900582cdd3ad86c1b1fd0830b1c6f"
  },
  {
    "url": "assets/js/9.d9eac141.js",
    "revision": "d3ad79e24125e16da920efcfb63fa436"
  },
  {
    "url": "assets/js/app.52de4c0c.js",
    "revision": "7a03491d8176e0aa7a39139ae9a494d3"
  },
  {
    "url": "en-us/docs/Changelog.html",
    "revision": "6275aab83c98aec993aa66d5229c63f2"
  },
  {
    "url": "en-us/docs/DevilMode.html",
    "revision": "e4b3f8576398998c4232269d468099ee"
  },
  {
    "url": "en-us/docs/index.html",
    "revision": "ab0bcfe947b290b8b6a632771ccf14d0"
  },
  {
    "url": "en-us/docs/SharedLibrary.html",
    "revision": "af813d17cb503c5c629cc3df7092ad61"
  },
  {
    "url": "en-us/Download.html",
    "revision": "f654627ffeb0eab34ec6b30c5f2c7168"
  },
  {
    "url": "en-us/index.html",
    "revision": "2b81327b6a3992967ca2607050f33dba"
  },
  {
    "url": "en-us/Support.html",
    "revision": "c7d621867cc520f4531bb2fd6ae7191a"
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
    "revision": "871adfbf1a7cd87305fe1b7d2ffb69ba"
  },
  {
    "url": "zh-hans/docs/Changelog.html",
    "revision": "181342e8f650d9e99893a17af4ae2e16"
  },
  {
    "url": "zh-hans/docs/DevilMode.html",
    "revision": "61bdac8187b9c8eeb02c6806eb911a5e"
  },
  {
    "url": "zh-hans/docs/index.html",
    "revision": "23e3d42685a71061b8ab429871c40b20"
  },
  {
    "url": "zh-hans/docs/SharedLibrary.html",
    "revision": "8349266e6e0efcb6454378c75afca7fb"
  },
  {
    "url": "zh-hans/Download.html",
    "revision": "98461e2830ab1012cd0f2ee8bb9c7c9f"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "5471d5d68c644cc7b09ebb5b24dde5bb"
  },
  {
    "url": "zh-hans/Support.html",
    "revision": "e59ddf392afc28b3186a8289ef9bb1ef"
  },
  {
    "url": "zh-hant/docs/Changelog.html",
    "revision": "8ddcd37c9009a91dc96087a26763da39"
  },
  {
    "url": "zh-hant/docs/DevilMode.html",
    "revision": "dd475361bf1b9f1aa1bb5f6cecb7dcf8"
  },
  {
    "url": "zh-hant/docs/index.html",
    "revision": "21c698784e93e3fc90436e27764b6d84"
  },
  {
    "url": "zh-hant/docs/SharedLibrary.html",
    "revision": "210bd14e527eb473515dd049191a49a8"
  },
  {
    "url": "zh-hant/Download.html",
    "revision": "bbe87eb7bd218162b81d651a64fa88fd"
  },
  {
    "url": "zh-hant/index.html",
    "revision": "7da3ef79f892cbfcc2c95b0cf2b9faa2"
  },
  {
    "url": "zh-hant/Support.html",
    "revision": "2cbe0c0788c978f1bdaaa0c2f380e5ca"
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
