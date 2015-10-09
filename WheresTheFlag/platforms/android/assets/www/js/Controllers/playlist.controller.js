/// <reference path="../../../scripts/typings/angular-ui/angular-ui-router.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/ionic/ionic.d.ts" />
var AppModule;
(function (AppModule) {
    'use strict';
    // Debug only
    AppModule.playlistScope;
    /*** ANGULAR CONTROLLER ***/
    var PlaylistController = (function () {
        function PlaylistController(scope) {
            // Debug only
            AppModule.playlistScope = scope;
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
    AppModule.PlaylistController = PlaylistController;
})(AppModule || (AppModule = {}));
// Attach the controller to the app
app.controller("PlaylistsCtrl", AppModule.PlaylistController)
    .controller('PlaylistCtrl', function ($scope, $stateParams) { });
//# sourceMappingURL=playlist.controller.js.map