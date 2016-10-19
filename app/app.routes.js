"use strict";
var router_1 = require('@angular/router');
var photo_detail_component_1 = require('./photo-gallery/photo-detail/photo-detail.component');
var photo_gallery_component_1 = require('./photo-gallery/photo-gallery.component');
var contact_component_1 = require('./contact/contact.component');
var about_component_1 = require('./about/about.component');
var routes = [
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: photo_gallery_component_1.PhotoGalleryComponent
    },
    {
        path: 'detail',
        component: photo_detail_component_1.PhotoDetailComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map