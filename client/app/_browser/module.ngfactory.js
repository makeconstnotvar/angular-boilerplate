import * as i0 from '@angular/core';
import * as i1 from './module';
import * as i2 from '../layouts/default/default';
import * as i3 from '../layouts/master1/master1.ngfactory';
import * as i4 from '../pages/index/index.ngfactory';
import * as i5 from '../pages/page1/page1.ngfactory';
import * as i6 from '../layouts/master2/master2.ngfactory';
import * as i7 from '../pages/page2/page2.ngfactory';
import * as i8 from '../controls/control3/control3.ngfactory';
import * as i9 from '../controls/control4/control4.ngfactory';
import * as i10 from '../layouts/default/default.ngfactory';
import * as i11 from '@angular/common';
import * as i12 from '@angular/platform-browser';
import * as i13 from '@angular/http';
import * as i14 from '@angular/forms';
import * as i15 from '@angular/router';
import * as i16 from '../services/communicate';
import * as i17 from '../layouts/master1/master1';
import * as i18 from '../pages/index/index';
import * as i19 from '../pages/page1/page1';
import * as i20 from '../layouts/master2/master2';
import * as i21 from '../pages/page2/page2';
import * as i22 from '../controls/control3/control3';
import * as i23 from '../controls/control4/control4';
import * as i24 from '../controls/module';
import * as i25 from '../pages/module';
import * as i26 from '../routes';
import * as i27 from '../module';
export var BrowserAppModuleNgFactory = i0.ɵcmf(i1.BrowserAppModule, [i2.DefaultLayout], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.Master1LayoutNgFactory, i4.IndexPageNgFactory, i5.Page1PageNgFactory,
                    i6.Master2LayoutNgFactory, i7.Page2PageNgFactory, i8.Control3ControlNgFactory,
                    i9.Control4ControlNgFactory, i10.DefaultLayoutNgFactory]], [3, i0.ComponentFactoryResolver],
            i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]),
        i0.ɵmpd(4608, i11.NgLocalization, i11.NgLocaleLocalization, [i0.LOCALE_ID]),
        i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i12.DomSanitizer, i12.ɵe, [i11.DOCUMENT]),
        i0.ɵmpd(6144, i0.Sanitizer, null, [i12.DomSanitizer]), i0.ɵmpd(4608, i12.HAMMER_GESTURE_CONFIG, i12.HammerGestureConfig, []), i0.ɵmpd(5120, i12.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i12.ɵDomEventsPlugin(p0_0), new i12.ɵKeyEventsPlugin(p1_0),
                new i12.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i11.DOCUMENT, i11.DOCUMENT, i11.DOCUMENT, i12.HAMMER_GESTURE_CONFIG]),
        i0.ɵmpd(4608, i12.EventManager, i12.EventManager, [i12.EVENT_MANAGER_PLUGINS,
            i0.NgZone]), i0.ɵmpd(135680, i12.ɵDomSharedStylesHost, i12.ɵDomSharedStylesHost, [i11.DOCUMENT]), i0.ɵmpd(4608, i12.ɵDomRendererFactory2, i12.ɵDomRendererFactory2, [i12.EventManager, i12.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i12.ɵDomRendererFactory2]), i0.ɵmpd(6144, i12.ɵSharedStylesHost, null, [i12.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i12.Meta, i12.Meta, [i11.DOCUMENT]),
        i0.ɵmpd(4608, i12.Title, i12.Title, [i11.DOCUMENT]), i0.ɵmpd(4608, i13.BrowserXhr, i13.BrowserXhr, []), i0.ɵmpd(4608, i13.ResponseOptions, i13.BaseResponseOptions, []), i0.ɵmpd(5120, i13.XSRFStrategy, i13.ɵb, []), i0.ɵmpd(4608, i13.XHRBackend, i13.XHRBackend, [i13.BrowserXhr, i13.ResponseOptions, i13.XSRFStrategy]),
        i0.ɵmpd(4608, i13.RequestOptions, i13.BaseRequestOptions, []), i0.ɵmpd(5120, i13.Http, i13.ɵc, [i13.XHRBackend, i13.RequestOptions]), i0.ɵmpd(4608, i14.ɵi, i14.ɵi, []), i0.ɵmpd(5120, i15.ActivatedRoute, i15.ɵf, [i15.Router]),
        i0.ɵmpd(4608, i15.NoPreloading, i15.NoPreloading, []), i0.ɵmpd(6144, i15.PreloadingStrategy, null, [i15.NoPreloading]), i0.ɵmpd(135680, i15.RouterPreloader, i15.RouterPreloader, [i15.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i15.PreloadingStrategy]), i0.ɵmpd(4608, i15.PreloadAllModules, i15.PreloadAllModules, []), i0.ɵmpd(5120, i15.ROUTER_INITIALIZER, i15.ɵi, [i15.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i15.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i16.CommunicateService, i16.CommunicateService, []), i0.ɵmpd(512, i11.CommonModule, i11.CommonModule, []),
        i0.ɵmpd(1024, i0.ErrorHandler, i12.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i15.ɵb()];
        }, []), i0.ɵmpd(512, i15.ɵg, i15.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, 'my-app-id', []), i0.ɵmpd(2048, i12.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) {
            return [i12.ɵc(p0_0, p0_1), i15.ɵh(p1_0), i12.ɵf(p2_0, p2_1, p2_2)];
        }, [[2, i12.NgProbeToken], [2, i0.NgProbeToken], i15.ɵg, i12.ɵTRANSITION_ID, i11.DOCUMENT,
            i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole,
            i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]),
        i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i12.BrowserModule, i12.BrowserModule, [[3, i12.BrowserModule]]), i0.ɵmpd(512, i13.HttpModule, i13.HttpModule, []), i0.ɵmpd(512, i14.ɵba, i14.ɵba, []),
        i0.ɵmpd(512, i14.FormsModule, i14.FormsModule, []), i0.ɵmpd(1024, i15.ɵa, i15.ɵd, [[3, i15.Router]]), i0.ɵmpd(512, i15.UrlSerializer, i15.DefaultUrlSerializer, []), i0.ɵmpd(512, i15.ChildrenOutletContexts, i15.ChildrenOutletContexts, []), i0.ɵmpd(256, i15.ROUTER_CONFIGURATION, {}, []),
        i0.ɵmpd(1024, i11.LocationStrategy, i15.ɵc, [i11.PlatformLocation, [2, i11.APP_BASE_HREF],
            i15.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i11.Location, i11.Location, [i11.LocationStrategy]),
        i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i15.ROUTES, function () {
            return [[{ path: '', component: i17.Master1Layout, children: [{ path: '', component: i18.IndexPage },
                            { path: 'page1', component: i19.Page1Page }] }, { path: 'page2', component: i20.Master2Layout,
                        children: [{ path: '', component: i21.Page2Page, children: [{ path: 'subpage3',
                                        component: i22.Control3Control }, { path: 'subpage4', component: i23.Control4Control }] }] }]];
        }, []), i0.ɵmpd(1024, i15.Router, i15.ɵe, [i0.ApplicationRef, i15.UrlSerializer,
            i15.ChildrenOutletContexts, i11.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i15.ROUTES, i15.ROUTER_CONFIGURATION, [2, i15.UrlHandlingStrategy],
            [2, i15.RouteReuseStrategy]]), i0.ɵmpd(512, i15.RouterModule, i15.RouterModule, [[2, i15.ɵa], [2, i15.Router]]), i0.ɵmpd(512, i24.ControlsModule, i24.ControlsModule, []), i0.ɵmpd(512, i25.PagesModule, i25.PagesModule, []),
        i0.ɵmpd(512, i26.RoutingModule, i26.RoutingModule, []), i0.ɵmpd(512, i27.AppModule, i27.AppModule, []), i0.ɵmpd(512, i1.BrowserAppModule, i1.BrowserAppModule, [])]);
});
//# sourceMappingURL=module.ngfactory.js.map