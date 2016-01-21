"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var HomeService = (function () {
            function HomeService($resource) {
                this.$resource = $resource;
                this.QuestionResource = $resource('/questions/:id', null, {
                    'update': { method: 'PUT' }
                });
            }
            HomeService.prototype.saveQuestion = function (question) {
                return this.QuestionResource.save(question).$promise;
            };
            ;
            return HomeService;
        }());
        Services.HomeService = HomeService;
        angular.module('app').service('HomeService', HomeService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
