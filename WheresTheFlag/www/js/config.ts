/// <reference path="../../scripts/typings/angular-ui/angular-ui-router.d.ts" />

module AppModule {
    'use strict';

    export class config {
        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
            $stateProvider

                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                    controller: 'AppCtrl'
                })

                .state('app.search', {
                    url: '/search',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/search.html'
                        }
                    }
                })

                .state('app.browse', {
                    url: '/browse',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/browse.html'
                        }
                    }
                })

                .state('app.playlists', {
                    url: '/playlists',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/playlists.html',
                            controller: 'PlaylistsCtrl'
                        }
                    }
                })

                .state('app.single', {
                    url: '/playlists/:playlistId',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/playlist.html',
                            controller: 'PlaylistCtrl'
                        }
                    }
                });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/playlists');
        }
    }
}

// attach the config to the app
app.config(AppModule.config); 