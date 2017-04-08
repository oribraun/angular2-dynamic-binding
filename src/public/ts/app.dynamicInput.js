/**
 * Created by private on 07/04/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DynamicInputComponent = (function () {
    function DynamicInputComponent() {
        this.placeholder = 'dynamic Text';
        this.inputs = [];
        this.numOfInputs = 3;
        this.addInput = function () {
            this.inputs.push('');
        };
        this.removeInput = function (index) {
            this.inputs.splice(index, 1);
        };
        for (var i = 0; i < 3; i++) {
            this.inputs.push('');
        }
    }
    DynamicInputComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    return DynamicInputComponent;
}());
DynamicInputComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-input',
        template: '<div class="icon icon-plus glyphicon glyphicon-plus" (click)="addInput()"></div><div *ngFor="let input of inputs; let i = index; trackBy:customTrackBy">' +
            '<span class="icon icon-minus glyphicon glyphicon-remove" (click)="removeInput(i)"></span>' +
            '<input class="input" [(ngModel)]="inputs[i]" placeholder="{{placeholder}}-{{i+1}}" /> ' +
            '<span class="input-result">{{input}}</span>' +
            '</div>'
    }),
    __metadata("design:paramtypes", [])
], DynamicInputComponent);
exports.DynamicInputComponent = DynamicInputComponent;

//# sourceMappingURL=app.dynamicInput.js.map
