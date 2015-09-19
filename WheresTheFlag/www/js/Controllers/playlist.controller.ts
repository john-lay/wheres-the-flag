/// <reference path="../../../scripts/typings/angular-ui/angular-ui-router.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/ionic/ionic.d.ts" />

module AppModule {
    'use strict';

    /*** ANGULAR SCOPE ***/
    export interface IPlaylistScope extends angular.IScope {
        // PROPERTIES
        playlists: { title: string, id: number }[];
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
app.controller("PlaylistsCtrl", AppModule.PlaylistController)
    .controller('PlaylistCtrl', ($scope: angular.IScope, $stateParams: ng.ui.IStateParamsService) => { }); 