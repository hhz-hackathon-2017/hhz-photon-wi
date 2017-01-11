(function () {
  angular
      .module('hackarthon.dashboard')
      .controller('dashboard.ctrl', dashCtrl);

      function dashCtrl() {

        console.log("do somthing");
        console.log("hallo");
        var connect = function() {
          ws = new WebSocket("ws://"+ window.location.host + "/ws");

          ws.onopen = function (e) {
            console.log("onopen:", arguments);
          };

          ws.onclose = function (e) {
            console.log("onclose:", arguments);
          };

          ws.onclose = function (e) {
            console.log("onmessage:", arguments);
          };

          ws.onerror = function (e) {
            console.log("onmessage:", arguments);
          };
        };
        connect();
      }
})();
