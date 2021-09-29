'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d2ae2c0d777514e7c27838c897443f6e",
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
".git/index": "af99e91ff7a923f8b32c7af4b057b212",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "987d3bc41a0f6de58091326bbf8c1af7",
".git/logs/refs/heads/master": "987d3bc41a0f6de58091326bbf8c1af7",
".git/logs/refs/remotes/origin/HEAD": "55c9c381da155747284fbf6586cd6b24",
".git/logs/refs/remotes/origin/master": "6359778e7f887f3cc6e63d1a77dd1cae",
".git/objects/08/270afa910f52c5b045d00fd424a1158a94c42d": "ad597ea39541ad66cc1288c3024522b7",
".git/objects/1c/85ea985b4e1daf0069e0918d0ec35ea771afa0": "efa6a5c5d3f1536a5fda566ec9e9a7db",
".git/objects/3d/ded8f3173bd13b09cbe1e8895fbab5dabbab30": "a92f23d04214c7f1e6a54e9e89ae4755",
".git/objects/57/216bd3d3f5ab4fb67ca7d492b257548c53173d": "6b7dbf88f96fde570284c62b60130169",
".git/objects/86/9fb078472abd221fc3c91dcd3410532d3634b2": "52bf425315e3fb5aebc43e3f0c90c3da",
".git/objects/8c/a3bf1edfd2e390d16bb70d92135bdbd7edf084": "0febe6de6f849713b10904eaef593016",
".git/objects/a8/fcf89da9c7d10050377f93b2d61ae612f7ac11": "0db2141e8e0ed512008bfc010ec5214a",
".git/objects/bf/377c0ffe86e8d20390c7a2d0938a7db6bab201": "2c706af57f24b19789de32391d94366a",
".git/objects/d4/abc78f2e9a0751472d0d1cccb19b81bbdbfefb": "2110f4669f893793a47b854002495944",
".git/objects/db/fe50b6f3394803c27c9bb9a0027325d3eaf6e4": "49b7581a4459e8be5c358e58599809f7",
".git/objects/ec/c2a3777b29bdd7a497177f34659cd0b9963534": "f14636d2f9552c5886effa4473f04ef3",
".git/objects/fd/9d5f456a5dede41ea390bed6bdf2fcef413c1e": "93f246e7afc53cd83b3d2595d734dc26",
".git/objects/pack/pack-737f7bbcee12038ffd4fa4337bf5a3aad814a5f4.idx": "faa3e1d5bd32c76049dd57437ce6c814",
".git/objects/pack/pack-737f7bbcee12038ffd4fa4337bf5a3aad814a5f4.pack": "e6bd69a7ae1683d2ff3dbacd252069b1",
".git/packed-refs": "668cce18657ad01cbcc88c44e71e29d3",
".git/refs/heads/master": "e5ff09994fdf32ade39ece93a9abe0e5",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "e5ff09994fdf32ade39ece93a9abe0e5",
"assets/AssetManifest.json": "d649adc5da5469cf19c25a33b3192c39",
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
"assets/assets/licenses/GDPR/DIALOG.txt": "fa9a2a037b6bccd4717f9a96834b1208",
"assets/assets/licenses/GDPR/LICENSE.txt": "f5e25d0f04946d3231fc88299f9a96b1",
"assets/assets/licenses/OpenSans/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/maps/italy.geojson": "0c5fe475abf2f263e3513051f9358e7b",
"assets/FontManifest.json": "9839b85ec5dde6a8d2afe43cd4dda8ea",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2e5f5f92ba617c08e140d1a31fb98990",
"assets/packages/weather_icons/lib/fonts/weathericons-regular-webfont.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"favicon.ico": "9c1b025fc22703f5980110e271fa565d",
"icons/Icon-192.png": "a3329f585ba953efb78d1e9c063f80c0",
"icons/Icon-512.png": "c3453c18d8d22032685f83fb619459ac",
"index.html": "c21f513327417cb67abe414577b80c64",
"/": "c21f513327417cb67abe414577b80c64",
"main.dart.js": "378ca28115c9fae1f348f2b6d75c7b3e",
"manifest.json": "56c7d9eacd8b5ed0a2365db9f00778b5",
"version.json": "07b32ef784b852564ec8da3098952b37"
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
