/// <reference path="../app.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/ionic/ionic.d.ts" />
/// <reference path="../services/camera.service.ts" />
 
module AppModule {
    'use strict';

    /*** ANGULAR SCOPE ***/
    export interface IAppScope extends angular.IScope {
        // PROPERTIES
        loginData: any;
        modal: any;
        pictureUrl: string;

        // PUBLIC METHODS
        closeLogin(): void;
        login(): void;
        doLogin(): void;
        GetPicture(): void;

    }

    // Debug only
    export var appScope;

    /*** ANGULAR CONTROLLER ***/
    export class AppController {

        static $inject = ["$scope", "$ionicModal", "$timeout", "CameraService"];

        constructor(scope: IAppScope,
            ionicModal: ionic.modal.IonicModalService,
            timeout: ng.ITimeoutService,
            CameraService: CameraModule.CameraService) {
            
            // Debug only
            appScope = scope;

            //init properties
            scope.pictureUrl = "image path...";

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            scope.loginData = {};

            // Create the login modal that we will use later
            ionicModal.fromTemplateUrl('templates/login.html', {
                scope: scope
            }).then(function (modal) {
                scope.modal = modal;
            });

            // Triggered in the login modal to close it
            scope.closeLogin = function () {
                scope.modal.hide();
            };

            // Open the login modal
            scope.login = function () {
                scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            scope.doLogin = function () {
                console.log('Doing login', scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                timeout(function () {
                    scope.closeLogin();
                }, 1000);
            };

            scope.GetPicture = () => {
                CameraService.GetPicture();
            }

            scope.$on('CameraService.GetPictureSuccess', (event: angular.IAngularEvent, result: string) => {
                console.log(result);
                scope.pictureUrl = result;
            });
        }
    }
}

// Attach the controller to the app
app.controller("AppCtrl", AppModule.AppController);