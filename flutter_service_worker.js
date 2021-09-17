'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "72a6348ff0c6ee38220241486d7bcb12",
".git/config": "c174c3baa4d71a8ade6c13c418b79617",
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
".git/index": "d1cd5bf337bdf7caa1c812317a912c9a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "629af92ac44b27670776710838ab3f28",
".git/logs/refs/heads/master": "629af92ac44b27670776710838ab3f28",
".git/logs/refs/remotes/origin/master": "54acab8dad08d7da7c917a9a4acad0ea",
".git/objects/01/15689b83a6bc14d09d5672950728b6356cd7a0": "ff36ca4e2702613dce506e65131b0fa4",
".git/objects/01/cdd9f70c260f432649189edf2430dfd84dd04a": "e8c4ae52449923e134fc050403b666cd",
".git/objects/03/e4d80c78b3c036a6f0e4b2ba8f085a043802f1": "742794708d4093fb65db2bce0e6df807",
".git/objects/0a/b0a144400e939734a7c693b19a90c23fb5608d": "d8b7fe89231ef482d68092e02e362ba4",
".git/objects/11/7856707b9b867863a9b48b127f756ee25fe109": "614a81cd1b1a3fecab1984a7112bc50a",
".git/objects/11/9c7aee9bdb8c0061bb98f2f12c74276402b09a": "1dad6870f98c58025c559993329b6d28",
".git/objects/13/0434e413646ea52fcae88c756d4d92bc238c6b": "89aac1e477f7241da6f717db4ab9a622",
".git/objects/19/31863a1d2467a3bb9a90339367e9df3ac63784": "9bb0578c578085734ad4ea16df84a15a",
".git/objects/1e/0c3319810ad7a0312e10c3d62da6beea7f1c58": "678c14d1cf3d106f2a2cd0d8caf73a26",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/1f3d5da42d33568b450a052771466b5a2180b8": "f32c7844f601bc69207035a75728c438",
".git/objects/28/2d9ab97a7a8c4e157e76bb5f0d3b644b7cece8": "24158d7ad4bafa4ad75cd28a2ac0fff4",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/30/30661e442fadb4772d5dc9061914d6a0de8b6e": "dbb954c7d45b479205877d63e276245b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/1cbb26c76ddc0c2242b55288bc51dbf968981b": "2b8410f3d1a4cabb51f01cefcbbd1924",
".git/objects/37/28328072b93ae19dd2f398893e681b5edb3f29": "a988ad69838ee08e565c53b31f1b22ea",
".git/objects/3a/67a1c4fab377c036683291f801283b440e447b": "408cdae0177da7d2bcb7ae5aa75ec80b",
".git/objects/43/aa156f267f90a60f97600645ff0c795407c9c6": "62d5627c663cb732fc1d3a33d02bb01c",
".git/objects/46/ea76a0468da35ea632a3bebbab50d575049ca1": "4feecb1a953ac4fb0f6df3aa7d5d33a6",
".git/objects/54/28c9c6dd788af7e626be91d6986d07cf6ae1b6": "054c49471d86b61bf98b92587c38cb8f",
".git/objects/54/e7059cf36359cb5a3860085714a95306af0dea": "84d83371b8598214017b309f9a987865",
".git/objects/64/928cdf7cc33ed0d8e84de47e3fe680183519b4": "f4f2f89ea0d5182197e65d6f3f07291e",
".git/objects/65/80d3a169e895d914f159c060b947e36746f275": "34514d47340caad5197155b259bae4be",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/6d/e54f7ff7ec380e01408afefad110e5afbc6064": "e2d6ad3c32fd5341f8fc2edbb5f72447",
".git/objects/7b/ca5ad54540c6e1b55416e1a524bc26a016e5d3": "41228ff72dc3a0e2c887e2600c182879",
".git/objects/7c/b9a1dabf69d554de6a6758957952d51d8c519d": "984ba0ee0ea8ad4a8542ff079a2e8dae",
".git/objects/7f/0c0e91e807ecef3bb9b7278e99031f5385b580": "33b9369b5703d565379c12ccbe3b1b62",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/94/baeae739064910bc647ee4854ab8022522d1ec": "1046304af92ea3cfa702829a44664ab0",
".git/objects/95/55af6ff602bbf56fc088d4f80b84cc0f6cb106": "9caeb733c652aa18cf50257047d65d91",
".git/objects/99/a3abbe493e786ca07deb8d05877f517468f10c": "c12452f650d68c8d5c7a98155cd29078",
".git/objects/9b/f9b4e97b6576c8cc3d4527073731fd9cc57493": "04889bdee9eb2a0d199d4f4113c377ce",
".git/objects/9c/16440f02348b39951260a06459447e6447b438": "612252907886dbde569e95c2ae07e241",
".git/objects/a2/7b8be79efe427c6c5cb68b51551dd72739fb13": "b1a88a5e1026ff7e9e1e8c4ab2d8ddf6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/ac/dcf77f35d84d788ad47f3ac1d19bf1c53df9a8": "eb324346b601bd1fa1742c505d27218f",
".git/objects/ae/bcf1421226d045b8043d26433d780fa365b7de": "dab936ce465bf4fc9ba11ea7a42a16aa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e542a7110ad6a326dbe3b30bf45c4489a9710f": "9a2c9fc3a80bdee98280072bd2737a72",
".git/objects/ba/0598a9ebfbb4723c66fab53896991932fa0da1": "ca20b31684d2de1c458b9e7c83c93e28",
".git/objects/be/0555d2f13408d22ddd22e75a51072a303d64ff": "131c620599536c22788b093c035d31f4",
".git/objects/d8/8c549e83ed02545f028e32e6d3adfa83e89eb2": "f00700088bbaa483a028df7983b590ff",
".git/objects/d8/cadeffec9a7931b35a10d5429f18320e1bdbcb": "2aa5ee7955033974f55903c72d98b00f",
".git/objects/d8/f45d78d56babe654e7dd6682b35c6680145a17": "a2bfad041d27083b6d19a19a854162ab",
".git/objects/d9/9f98d52976193a2404e589b16ed2f1718294c6": "82d597fc1ac75faca4c8df52a422bad4",
".git/objects/e1/08ec75ee229d42dcc7926648b90b5b57295d7b": "d498c1e7172d41f5b253bf12856944d2",
".git/objects/ef/dd5e84a0397ecada7b9cfde51db87db08766bd": "ad7d8c09a50d25e6b1fd7275b39a3dbe",
".git/objects/fa/76c3411ea23aa167a5839dbce00d4580ebadfa": "7c16f1255a4b850cf0f9065999b19765",
".git/objects/fb/ee5b1737d9f29e867a37456a7af674b45f3753": "92b1d03398b4dc56490d64b1c803e355",
".git/refs/heads/master": "e4e69bb957ed5e87925083808969a312",
".git/refs/remotes/origin/master": "e4e69bb957ed5e87925083808969a312",
"assets/AssetManifest.json": "e6478b07774256db78a23093e892cfc8",
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
"assets/assets/licenses/OpenSans/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/FontManifest.json": "9839b85ec5dde6a8d2afe43cd4dda8ea",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2e5f5f92ba617c08e140d1a31fb98990",
"assets/packages/weather_icons/lib/fonts/weathericons-regular-webfont.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "29f125cdbc2dccaa6f273c3a9aad83c4",
"/": "29f125cdbc2dccaa6f273c3a9aad83c4",
"main.dart.js": "1586d3771ae4f0007971ebab7c98ea6e",
"manifest.json": "a17fb18a24a5c8abf3b3c0c4b6b1ffa8",
"version.json": "c11a1d575a782b5bbdd0d996ef313787"
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
