import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';

import { HttpService }   from './http.service';



@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule],
    declarations: [  AppComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
