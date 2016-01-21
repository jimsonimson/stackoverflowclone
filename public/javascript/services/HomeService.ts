"use strict";
namespace app.Services {
  export class HomeService {
      public QuestionResource;

      public saveQuestion(question){
          // POST: /questions
          return this.QuestionResource.save(question).$promise;
      };

    constructor(private $resource: ng.resource.IResourceService) {

        this.QuestionResource = $resource('/questions/:id', null,
            {
                'update': { method: 'PUT' }
            });
    }
  }

  angular.module('app').service('HomeService', HomeService);
}
