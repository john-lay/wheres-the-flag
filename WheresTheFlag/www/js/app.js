/// <reference path="../../scripts/typings/ionic/ionic.d.ts" />
/// <reference path="../../scripts/typings/cordova/plugins/statusbar.d.ts" />
var app = angular.module('starter', ['ionic']);
var AppModule;
(function (AppModule) {
    'use strict';
    var run = (function () {
        function run($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        }
        return run;
    })();
    AppModule.run = run;
})(AppModule || (AppModule = {}));
// init the app
app.run(AppModule.run);
//# sourceMappingURL=app.js.map