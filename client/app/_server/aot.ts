import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import {ServerAppModuleNgFactory} from './module.ngfactory';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {enableProdMode} from "@angular/core";

enableProdMode();

let engine = ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory
});
export {engine};