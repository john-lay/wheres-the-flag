/// <reference path="../app.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/ionic/ionic.d.ts" />

module CameraModule {
    'use strict';

    /*** ANGULAR SCOPE ***/
    export interface ICameraService {
        GetPicture(): void;
    }

    export class CameraService implements ICameraService {
        static $inject = ["$rootScope"/*, "$http", "$q"*/];
        static rootScope: any;
        //static http: angular.IHttpService;
        //static q: angular.IQService;

        constructor($rootScope: angular.IRootScopeService/*, $http: angular.IHttpService, private $q: angular.IQService*/) {
            CameraService.rootScope = $rootScope;
            //CameraService.http = $http;
            //CameraService.q = $q;
        }

        GetPicture() {
            navigator.camera.getPicture((result)  => {
                CameraService.rootScope.$broadcast("CameraService.GetPictureSuccess", result);
                return null;
            }, 
            (error) => {
                CameraService.rootScope.$broadcast("CameraService.GetPictureFailed", error);
            }
            );
        }

        //GetLocation() {
        //    var posOptions = { timeout: 10000, enableHighAccuracy: false };
        //    navigator.geolocation.getCurrentPosition((result) => {
        //        CameraService.rootScope.$broadcast("CameraService.GetLocationSuccess", result);
        //        return null;
        //    },
        //    (error) => {
        //        CameraService.rootScope.$broadcast("CameraService.GetLocationFailed", error);
        //    }
        //    );
        //}
    }
}

// Attach the service to the app
app.service("CameraService", CameraModule.CameraService);