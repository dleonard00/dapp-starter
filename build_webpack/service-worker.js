"use strict";var precacheConfig=[["/index.html","acb4ff4a601d70c8ec8030800cca4936"],["/static/css/main.5c9e4f72.css","91fec0fe3535da0863fd4bf4307c368c"],["/static/js/main.abcaf2b4.js","cf5db6b7076c6b4307d1a8a5c45a96a7"],["/static/media/Open-Sans-regular.4124088f.woff2","4124088fdd8c315a6d096b65b6cbf428"],["/static/media/Open-Sans-regular.7e735d7a.svg","7e735d7ae17da9ead1360165b1dc3cfb"],["/static/media/Open-Sans-regular.953de7ba.ttf","953de7bafd9fdbf41ea443aacabe2706"],["/static/media/Open-Sans-regular.c35ad7c7.eot","c35ad7c76819575781c833319c13711b"],["/static/media/Open-Sans-regular.d0bad741.woff","d0bad741aefb909e4be56d188b6f02b9"],["/static/media/Oswald-300.1cd1aa12.woff2","1cd1aa124ab22433a697eea7e91cdcb2"],["/static/media/Oswald-300.55bb45b6.woff","55bb45b64b791d306a39e3af9791216a"],["/static/media/Oswald-300.6d9515af.ttf","6d9515af2c14dcad1a6dcaac59ab6363"],["/static/media/Oswald-300.d6069ae5.eot","d6069ae58a6b125b1da3f6bd32ec4a12"],["/static/media/Oswald-300.fe401aad.svg","fe401aaddb1aeff7ed2b8983cfd99dc0"],["/static/media/Oswald-regular.29b3a057.woff2","29b3a057ac523422b12afa8f7cf692f7"],["/static/media/Oswald-regular.31adcb0e.eot","31adcb0ebce77e9bf3fb797cf2fa65b4"],["/static/media/Oswald-regular.48b6c164.svg","48b6c1644fe8b3aa792bc08fdae898ec"],["/static/media/Oswald-regular.4cd42bac.woff","4cd42bac8ebc77f27c60ce7ffe3bb975"],["/static/media/Oswald-regular.8573096c.ttf","8573096c5e435cde244a0483601020a2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});