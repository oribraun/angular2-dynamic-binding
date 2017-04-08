import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { DynamicInputComponent } from './app.dynamicInput';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,DynamicInputComponent ],
  bootstrap:    [ AppComponent,DynamicInputComponent ]
})
export class AppModule { }
