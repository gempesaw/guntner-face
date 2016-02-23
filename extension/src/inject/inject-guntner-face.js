var images = document.getElementsByTagName('img');
Array.prototype.slice.call(images).forEach(function (img) {
    if (Math.random() > 0.5 ) {
        img.src = "http://s.qa.origin.sharecare.com/honeydew/2016-02-23.jpg";
    }
});
