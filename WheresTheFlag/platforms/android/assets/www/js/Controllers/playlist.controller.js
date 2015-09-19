/// <reference path="../../../scripts/typings/angular-ui/angular-ui-router.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/ionic/ionic.d.ts" />
var PlaylistModule;
(function (PlaylistModule) {
    'use strict';
    // Debug only
    PlaylistModule.playlistScope;
    /*** ANGULAR CONTROLLER ***/
    var PlaylistController = (function () {
        function PlaylistController(scope) {
            // Debug only
            PlaylistModule.playlistScope = scope;
            scope.playlists = [
                { title: 'Reggae', id: 1 },
                { title: 'Chill', id: 2 },
                { title: 'Dubstep', id: 3 },
                { title: 'Indie', id: 4 },
                { title: 'Rap', id: 5 },
                { title: 'Cowbell', id: 6 }
            ];
        }
        PlaylistController.$inject = ["$scope"];
        return PlaylistController;
    })();
    PlaylistModule.PlaylistController = PlaylistController;
})(PlaylistModule || (PlaylistModule = {}));
// Attach the controller to the app
angular.module('controllers.playlist', [])
    .controller("PlaylistsCtrl", PlaylistModule.PlaylistController)
    .controller('PlaylistCtrl', function ($scope, $stateParams) { });
//# sourceMappingURL=playlist.controller.js.map