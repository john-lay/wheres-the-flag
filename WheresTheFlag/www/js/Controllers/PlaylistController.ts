/// <reference path="../../../scripts/typings/angular-ui/angular-ui-router.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/ionic/ionic.d.ts" />

module AppModule {
    'use strict';

    /*** ANGULAR SCOPE ***/
    export interface IAppScope extends angular.IScope {
        // PROPERTIES
        loginData: any;
        modal: any;

        // PUBLIC METHODS
        closeLogin(): void;
        login(): void;
        doLogin(): void;

    }

    // Debug only
    export var appScope;

    /*** ANGULAR CONTROLLER ***/
    export class AppController {

        static $inject = ["$scope", "$ionicModal", "$timeout"];

        constructor(scope: IAppScope, ionicModal: ionic.modal.IonicModalService, timeout: ng.ITimeoutService) {
            
            // Debug only
            appScope = scope;

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
        }
    }
}

module AppModule {
    'use strict';

    /*** ANGULAR SCOPE ***/
    export interface IPlaylistScope extends angular.IScope {
        // PROPERTIES
        playlists: {title: string, id: number}[];
    }

    // Debug only
    export var playlistScope;

    /*** ANGULAR CONTROLLER ***/
    export class PlaylistController {

        static $inject = ["$scope"];

        constructor(scope: IPlaylistScope) {
            
            // Debug only
            playlistScope = scope;

            scope.playlists = [
                { title: 'Reggae', id: 1 },
                { title: 'Chill', id: 2 },
                { title: 'Dubstep', id: 3 },
                { title: 'Indie', id: 4 },
                { title: 'Rap', id: 5 },
                { title: 'Cowbell', id: 6 }
            ];
        }
    }
}

// Attach the controller to the app
angular.module('starter.controllers', [])
    .controller("AppCtrl", AppModule.AppController)
    .controller("PlaylistsCtrl", AppModule.PlaylistController)
    .controller('PlaylistCtrl', ($scope: angular.IScope, $stateParams: ng.ui.IStateParamsService) => {});