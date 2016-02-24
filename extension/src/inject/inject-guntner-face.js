/*global chrome*/

function faceGuntner () {
    var images = document.getElementsByTagName('img');
    Array.prototype.slice.call(images).forEach(function (img) {
        if (Math.random() > 0.5 ) {
            img.src = chrome.extension.getURL("images/guntner.jpg");
        }
    });
}

faceGuntner();
