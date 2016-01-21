"use strict";
namespace app.Controllers{
    export class QuestionCreateController {
        public question = {};

        public createQuestion(){
            this.HomeService.saveQuestion(this.question).then((res)=>{
                this.$location.path('/')
            })
        }

        constructor(
            private HomeService: app.Services.HomeService,
            private $location: ng.ILocationService
        ){}
    }
    angular.module('app').controller('QuestionCreateController', QuestionCreateController);
}
