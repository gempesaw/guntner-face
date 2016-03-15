/*global chrome*/

function chooseGuntner () {
    var guntnerImages = [
        'images/guntner1.jpg',
        'images/guntner2.png',
        'images/guntner3.png',
        'images/guntner4.png',
        'images/guntner5.png'
    ];

    var index = Math.floor(Math.random() * guntnerImages.length);
    return guntnerImages[index];
}

function faceGuntner () {
    var images = document.getElementsByTagName('img');
    Array.prototype.slice.call(images).forEach(function (img) {
        if (Math.random() > 0.5 ) {
            img.src = chrome.extension.getURL(chooseGuntner());
        }
    });
}

function guntnerIsReady(fn) {
    if (document.readyState != 'loading'){
        faceGuntner();
    } else {
        document.addEventListener('DOMContentLoaded', faceGuntner);
    }
}

guntnerIsReady();
