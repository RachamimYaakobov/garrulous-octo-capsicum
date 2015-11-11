(function(window) {
      /* setTimeout(function() {*/
      window.onload = function() {
        var imgs = document.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].src.indexOf("jdn.co.il/wp-content/uploads/wp-banners") != -1) {
                imgs[i].src = "";
                imgs[i].alt = "";
            }
        }
      // setVideo();
       };
  /* }, 3000);*/ 
})(window);

function setVideo() {
    var iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < iframes.length; i++) {
        var doc = iframes[i].contentDocument;
        var script = doc.getElementsByTagName("script")[0].innerText;
        var trueUrl = script.substring(script.indexOf("htpp"), script.indexOf("mp4"));
        alert(trueUrl);
    }
}
