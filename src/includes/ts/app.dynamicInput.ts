/**
 * Created by private on 07/04/2017.
 */

import {Component} from '@angular/core';

@Component({
    selector:'dynamic-input',
    template:'<div class="icon icon-plus glyphicon glyphicon-plus" (click)="addInput()"></div><div *ngFor="let input of inputs; let i = index; trackBy:customTrackBy">' +
                '<span class="icon icon-minus glyphicon glyphicon-remove" (click)="removeInput(i)"></span>' +
                '<input class="input" [(ngModel)]="inputs[i]" placeholder="{{placeholder}}-{{i+1}}" /> ' +
                '<span class="input-result">{{input}}</span>' +
            '</div>'
})

export class DynamicInputComponent {
    placeholder = 'dynamic Text'
    inputs = []
    constructor() {
        for (var i = 0; i < 3; i++) {
            this.inputs.push('');
        }
    }
    numOfInputs = 3;
    addInput = function(){
        this.inputs.push('');
    }
    removeInput = function(index){
        this.inputs.splice(index,1);
    }

    customTrackBy(index: number, obj: any): any {
        return index;
    }
}
