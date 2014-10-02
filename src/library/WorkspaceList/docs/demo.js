/*globals console, angular, Chance, setTimeout*/

var demoApp = angular.module('cyphy.ui.WorkspaceList.demo', [
    'cyphy.components',
    'cyphy.components.templates'
]);

// overwrite WorkspaceService with dummy data
demoApp.service('WorkspaceService', function ($q, $timeout) {
    'use strict';

    var self = this,
        workspaceUpdateListener;

    this.duplicateWorkspace = function (context, otherWorkspaceId) {
        console.log('Not implemented.', otherWorkspaceId);
    };

    this.createWorkspace = function (context, data) {
        console.log('Not implemented.', data);
    };

    this.deleteWorkspace = function (context, workspaceId, msg) {
        $timeout(function () {
            workspaceUpdateListener({
                id: workspaceId,
                type: 'unload',
                data: null
            });
        }, 400);
    };

    this.exportWorkspace = function (workspaceId) {
        console.log('Not implemented.', workspaceId);
    };

    this.watchWorkspaces = function (parentContext, updateListener) {
        var deferred = $q.defer(),
            i,
            numItems,
            data = {
                regionId: 'region_mockId',
                workspaces: {} // workspace = {id: <string>, name: <string>, description: <string>}
            };

        workspaceUpdateListener = updateListener;

        self.chance = new Chance();
        numItems = self.chance.integer({min: 2, max: 8});

        for (i = 0; i < numItems; i += 1) {
            data.workspaces[i] = {
                id: i,
                name: self.chance.name(),
                description: self.chance.sentence()
            };
        }

        $timeout(function () {
            updateListener({
                id: 'update_1',
                type: 'load',
                data: {
                    id: 'update_1',
                    name: 'Created elsewhere',
                    description: 'New Workspace from update listener'
                }
            });
        }, 2500);

        deferred.resolve(data);

        return deferred.promise;
    };

    this.watchNumberOfComponents = function (parentContext, workspaceId, updateListener) {
        var deferred = $q.defer();
        $timeout(function () {
            updateListener({id: '/1/1', type: 'unload', data: self.chance.integer({min: 0, max: 175})});
        }, 5000);
        deferred.resolve({
            regionId: workspaceId,
            count: self.chance.integer({min: 0, max: 175})
        });
        return deferred.promise;
    };

    this.watchNumberOfDesigns = function (parentContext, workspaceId, updateListener) {
        var deferred = $q.defer();
        $timeout(function () {
            updateListener({id: '/1/1', type: 'unload', data: self.chance.integer({min: 0, max: 15})});
        }, 7000);
        deferred.resolve({
            regionId: workspaceId,
            count: self.chance.integer({min: 0, max: 15})
        });
        return deferred.promise;
    };

    this.watchNumberOfTestBenches = function (parentContext, workspaceId, updateListener) {
        var deferred = $q.defer();
        $timeout(function () {
            updateListener({id: '/1/1', type: 'unload', data: self.chance.integer({min: 0, max: 10})});
        }, 3000);
        deferred.resolve({
            regionId: workspaceId,
            count: self.chance.integer({min: 0, max: 10})
        });
        return deferred.promise;
    };

    this.cleanUpRegion = function (parentContext, regionId) {
        console.log('cleanUpRegion');
    };

    this.cleanUpAllRegions = function (parentContext) {
        console.log('cleanUpAllRegions');
    };

    this.registerWatcher = function (parentContext, fn) {
        fn(false);
    };
});