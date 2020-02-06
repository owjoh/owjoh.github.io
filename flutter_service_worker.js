'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "a3675a48f7d1a2423c4c5314ec2c8562",
"/assets\assets\Asset 1.png": "d848fbb792d7a508f26c74d2550bec8a",
"/assets\assets\Asset 1@0.5x.png": "8a394472870ef8e6b5d7eab8967c1c95",
"/assets\assets\Asset 2.png": "e7a3a129cb0d45e51f54454ba7b76a79",
"/assets\assets\Asset 2@0.75x.png": "44be15dfa4d78731384bc086cb006ff4",
"/assets\assets\Asset%201.png": "d848fbb792d7a508f26c74d2550bec8a",
"/assets\assets\Asset%201@0.5x.png": "8a394472870ef8e6b5d7eab8967c1c95",
"/assets\assets\Asset%202.png": "e7a3a129cb0d45e51f54454ba7b76a79",
"/assets\assets\Asset%202@0.75x.png": "44be15dfa4d78731384bc086cb006ff4",
"/assets\assets\flidget_logo_75x.png": "366e57d8ff52cdbf9cc7941b861bbcd6",
"/assets\assets\flidget_med_logo.png": "77398b2fa6cf2872f0dd80d3beb80e34",
"/assets\assets\flidget_med_logo.svg": "240a55744baed43bb213d3152044d9c0",
"/assets\assets\flidget_med_logo_darkmode.png": "161749dcd2fdc52e0d47eb0384f55338",
"/assets\assets\flidget_med_logo_med.png": "2dc775680f1e2a95f6d5dad493ea1a55",
"/assets\assets\logo_75x.png": "afd6fe8132d85893c781882e68010191",
"/assets\assets\mockup.png": "0c956d068f0eb7acd46355e1be7fd441",
"/assets\assets\mockup_example_2.png": "58bd45c080cf7533b120780b4fe7fd69",
"/assets\assets\mockup_phone.png": "3a9ddcaa1dd820045041cba189f4e164",
"/assets\assets\mockup_phone_shadow.png": "2403b274a73335606c413de2167d0d5e",
"/assets\assets\mockup_template.png": "3bc632f65c5a073a6257d14918f481f9",
"/assets\assets\mockup_template_shadow.png": "2f1f358a2b770d06b58ce0c36cc6bac8",
"/assets\assets\mockup_widgets.png": "43faa5f7ac5f9fc5588a73d9a6271927",
"/assets\assets\mockup_widgets_shadow.png": "771c988d1ce117e7a35dad13c4c8ce8a",
"/assets\assets\Wave-01.png": "baf3daa7c2131a724d40a608be708465",
"/assets\FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "7c0ece3a2836ddfaf845330dd7542251",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/index.html": "ead31108fc955beca162c99ec9032f1e",
"/main.dart.js": "e96f2fba7ae78ec23efec42a097bdb6a",
"/main.dart.js.deps": "9e5846f9001697826ca153a25f479a53"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
