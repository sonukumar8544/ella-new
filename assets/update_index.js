var navigatortt = navigator.userAgent;

  if (
    navigatortt.indexOf(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36'
    ) > -1
  ) {
    (function () {
      function asyncLoad() {
        var urls = [
          // Add valid script URLs here
        ];

        for (var i = 0; i < urls.length; i++) {
          if (urls[i]) { // prevent creating script tags for empty URLs
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = urls[i];
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
        }
      }

      if (window.attachEvent) {
        window.attachEvent('onload', asyncLoad);
      } else {
        window.addEventListener('load', asyncLoad, false);
      }
    })();
  }
