'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "901e9c22c127a3e729f4d3565c6c3691",
".git/config": "ea4329ef0aef64a5c67fabc58531ad70",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "df85546549656646777fcbff4d673743",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4388d563f95389d369cc7b2b3e6f0bae",
".git/logs/refs/heads/master": "4388d563f95389d369cc7b2b3e6f0bae",
".git/logs/refs/remotes/origin/HEAD": "55c9c381da155747284fbf6586cd6b24",
".git/logs/refs/remotes/origin/master": "925c7c2cb69ba91479e6211af224d94e",
".git/objects/04/29c4e826f2fb60710d85aa550718c3e96b5889": "7e804a61159d7e81bcd88caad7eb63df",
".git/objects/05/02058656034824ddcf333ce3abf24530833f0b": "d496148ade84092290152b13a2d18779",
".git/objects/07/8f43c9cf8231b16be0b228b6e7abeb8876296b": "691eae281a0f3fa1a3413d2463f60c7c",
".git/objects/08/270afa910f52c5b045d00fd424a1158a94c42d": "ad597ea39541ad66cc1288c3024522b7",
".git/objects/0a/e54e4d0510d72bcf658104015b850df38db572": "1a0c6a20cc1f620b82e2d39d79b299c5",
".git/objects/0d/9a65e892b624e803bef9f4376c4b229f9d879b": "1f1226df99c8f5f63957ff1b82b71dbd",
".git/objects/15/6adbb8ba390ffc67405a080e0b89072eb4e073": "3edf04daac93fd0a60b50c050cb1e172",
".git/objects/1c/85ea985b4e1daf0069e0918d0ec35ea771afa0": "efa6a5c5d3f1536a5fda566ec9e9a7db",
".git/objects/23/697bd97b87805d7d2f60d7000f621df65fd4fc": "4dcc5d6a503b3a9c6ab49fab40df7f2a",
".git/objects/24/c2d89c25170ea990094c1d3590bcf03ab19cf7": "b444fc88f47e4eca6aef0410fcc23671",
".git/objects/37/7c15409e315a10a3453822327a31373356b82d": "cd4863809efefee223b7d208f06c72bf",
".git/objects/3d/ded8f3173bd13b09cbe1e8895fbab5dabbab30": "a92f23d04214c7f1e6a54e9e89ae4755",
".git/objects/48/708ac5048dc9f76717bc1a60c6482a64b4b963": "c5fa5da06f02fbffcd81097d0026efda",
".git/objects/57/216bd3d3f5ab4fb67ca7d492b257548c53173d": "6b7dbf88f96fde570284c62b60130169",
".git/objects/5c/6aeff07819eb909a5c3c5fac96dac9e0a5da29": "4cb276588bdb9b298e509a911cdb6d53",
".git/objects/63/fec54e14d881821215c57e18faa4b074e8f505": "de33fababff445204cf23949325a9e77",
".git/objects/65/caa6dbe678bc5569ea45686961818e99f7acb4": "29d3937ec44edd9557960a1ecbd7ca0a",
".git/objects/67/e6e4561141c0124e0127659e9772ef6f90cced": "d15fa3d983f84006f137807aed8d2acc",
".git/objects/74/611a5f2542ced0035446b830cfb28e2e67b305": "d40883a9992f30299c7b80cb48656224",
".git/objects/79/576ba40164ba4b19401e5352c79fb56cfd2f40": "129a7c769fbed2119d57b8eda70b5a08",
".git/objects/7a/6cee3b104388d8acdbfa6a9a520c3782ce4a69": "9fb19807d68d571f54d8c39633f94d10",
".git/objects/7d/28b69d699371701e054ea74f6bc5e256c58284": "77dda762790338e8bbe6a4bdeb1e6d1f",
".git/objects/83/67b7c7805a6b4b104efd248f8dc0b1b4138540": "f1ab582c2bd6fa0631f6cfb0ee565626",
".git/objects/86/9fb078472abd221fc3c91dcd3410532d3634b2": "52bf425315e3fb5aebc43e3f0c90c3da",
".git/objects/8c/a3bf1edfd2e390d16bb70d92135bdbd7edf084": "0febe6de6f849713b10904eaef593016",
".git/objects/9a/c7d843c048ccf812c8409ff6102b5a272e489f": "12430853725b093a6078e1fff7abc05e",
".git/objects/9f/5960caf64696d2e587ccce2872bbd77f7072f5": "a68d801e6c944a94ba00466c5cf950ce",
".git/objects/a8/fcf89da9c7d10050377f93b2d61ae612f7ac11": "0db2141e8e0ed512008bfc010ec5214a",
".git/objects/a9/d7c042d26735a580adf7be4676b949b3214df5": "aa9cbe38fb2631037f9340cb8fb20a23",
".git/objects/bb/1e2fe66de93fcf2cba30c91423c8c1326817fd": "1efd4e094637f473e9e4da337390f50f",
".git/objects/be/a0c06f94fd1424276215d48975df75e2e649e0": "845da613b0efba3d0f2ec89f3e0f8828",
".git/objects/bf/377c0ffe86e8d20390c7a2d0938a7db6bab201": "2c706af57f24b19789de32391d94366a",
".git/objects/d1/22b1beed7a6695aa56dba292a293d415b3285e": "71b44f497d0ee381e7f1925f059b1d8b",
".git/objects/d4/abc78f2e9a0751472d0d1cccb19b81bbdbfefb": "2110f4669f893793a47b854002495944",
".git/objects/d4/cc272444e254f7f6e74fd89e263de7e5b9511e": "2b57b7aedc9a6abf129297b352385a65",
".git/objects/d5/50c7567388d913ffbbd952f32e8c1c2bb78c89": "97cbfb42ec112ee4d0d56f56d4c1722c",
".git/objects/da/7017e3cf463e0ea1cd96386a882775216a7a20": "02bd39f9bd83b41b44b275b4bea371e2",
".git/objects/db/fe50b6f3394803c27c9bb9a0027325d3eaf6e4": "49b7581a4459e8be5c358e58599809f7",
".git/objects/dd/92223ffabe247b6a125357579b06641716d2a3": "0ca833121722a059a0ee28773f8ff8bb",
".git/objects/e7/d6402482616ef3f5956cb1ff21023c0a95e38c": "9ce98872f4580a3a240efbcf13b96e7e",
".git/objects/ec/c2a3777b29bdd7a497177f34659cd0b9963534": "f14636d2f9552c5886effa4473f04ef3",
".git/objects/f4/10ce30ea125df5a446bd89b2bf1514ad19eb0f": "d9dc8707bea6c2efc5fa23257e2f5602",
".git/objects/f8/dd8c1dc9916a19b3c118a06649382a829ff2b8": "af7c468930803514caffb92002d5bb96",
".git/objects/fa/cb8cf19200c7a9a22d62300b858c11f6c3be8a": "a2ee566eeef754d073f13111e54a071e",
".git/objects/fb/8e93ba81cf973f52925a1c4020c116d025c9e6": "c072fed576436fb40bb1c55e876728c8",
".git/objects/fd/9d5f456a5dede41ea390bed6bdf2fcef413c1e": "93f246e7afc53cd83b3d2595d734dc26",
".git/objects/pack/pack-737f7bbcee12038ffd4fa4337bf5a3aad814a5f4.idx": "faa3e1d5bd32c76049dd57437ce6c814",
".git/objects/pack/pack-737f7bbcee12038ffd4fa4337bf5a3aad814a5f4.pack": "e6bd69a7ae1683d2ff3dbacd252069b1",
".git/packed-refs": "668cce18657ad01cbcc88c44e71e29d3",
".git/refs/heads/master": "36c5c0024c4d38eb6c3cbbccf50bd21e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "36c5c0024c4d38eb6c3cbbccf50bd21e",
"assets/AssetManifest.json": "8db0141c878a818bcff5d03ff79c5b4d",
"assets/assets/fonts/OpenSans/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/OpenSans/OpenSans-BoldItalic.ttf": "3a8113737b373d5bccd6f71d91408d16",
"assets/assets/fonts/OpenSans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/OpenSans/OpenSans-ExtraBoldItalic.ttf": "a10effa3ed22bb89dd148e0018a7a761",
"assets/assets/fonts/OpenSans/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/assets/fonts/OpenSans/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/assets/fonts/OpenSans/OpenSans-LightItalic.ttf": "c147d1302b974387afd38590072e7294",
"assets/assets/fonts/OpenSans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/OpenSans/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.ttf": "4f04fe541ca8be9b60b500e911b75fb5",
"assets/assets/images/GDPR.png": "39a6140e28c8699d0b0ed265c3f820c9",
"assets/assets/images/Icon-512.png": "c3453c18d8d22032685f83fb619459ac",
"assets/assets/images/LOGO_GMOVE.png": "d9ee31205192c85439725c9fa68502d4",
"assets/assets/images/LOGO_NETCOM.png": "f1ba0a20afed95d8f1a195ae4aa5b272",
"assets/assets/images/LOGO_VODAFONE.png": "353bbdf3cbf3bca4697b1671d4d15bc0",
"assets/assets/licenses/GDPR/DIALOG.txt": "fa9a2a037b6bccd4717f9a96834b1208",
"assets/assets/licenses/GDPR/LICENSE.txt": "f5e25d0f04946d3231fc88299f9a96b1",
"assets/assets/licenses/OpenSans/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/maps/italy.geojson": "0c5fe475abf2f263e3513051f9358e7b",
"assets/FontManifest.json": "9839b85ec5dde6a8d2afe43cd4dda8ea",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "eeff37176ba489c8d9a11165c863f186",
"assets/packages/weather_icons/lib/fonts/weathericons-regular-webfont.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"favicon.ico": "9c1b025fc22703f5980110e271fa565d",
"icons/Icon-192.png": "a3329f585ba953efb78d1e9c063f80c0",
"icons/Icon-512.png": "c3453c18d8d22032685f83fb619459ac",
"index.html": "1d427c8c7f8ddd8aa7596293bc6763e7",
"/": "1d427c8c7f8ddd8aa7596293bc6763e7",
"main.dart.js": "d7d41d2734d9b4ecba47108859c65f99",
"manifest.json": "56c7d9eacd8b5ed0a2365db9f00778b5",
"version.json": "1f52c5c39433bc0ce640c93cd11e5eb6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
