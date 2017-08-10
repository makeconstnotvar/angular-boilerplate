var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayout } from "./layouts/default/default";
let ServerAppModule = class ServerAppModule {
    test() {
        console.log(1);
    }
};
ServerAppModule = __decorate([
    NgModule({
        bootstrap: [DefaultLayout],
        imports: [
            BrowserModule.withServerTransition({
                appId: 'my-app-id'
            }),
            ServerModule,
            AppModule
        ],
    })
], ServerAppModule);
export { ServerAppModule };
