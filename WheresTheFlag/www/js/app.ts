/// <reference path="../../scripts/typings/ionic/ionic.d.ts" />
/// <reference path="../../scripts/typings/cordova/plugins/statusbar.d.ts" />

var app: ng.IModule = angular.module('starter', ['ionic']);

module AppModule {
    'use strict';

    declare var StatusBar: StatusBar;

    export class run {
        constructor($ionicPlatform: ionic.platform.IonicPlatformService) {
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
    }
}

// init the app
app.run(AppModule.run);