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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var photo_service_1 = require('../shared/photo.service');
var PhotoDetailComponent = (function () {
    function PhotoDetailComponent(photoService, route) {
        this.photoService = photoService;
        this.route = route;
    }
    PhotoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.photoService.getPhoto(id).then(function (photo) { return _this.photo = photo; });
        });
    };
    PhotoDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PhotoDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    PhotoDetailComponent = __decorate([
        core_1.Component({
            selector: 'photo-detail',
            templateUrl: 'app/photo-gallery/photo-detail/photo-detail.component.html',
            styleUrls: ['app/photo-gallery/photo-detail/photo-detail.css']
        }), 
        __metadata('design:paramtypes', [photo_service_1.PhotoService, router_1.ActivatedRoute])
    ], PhotoDetailComponent);
    return PhotoDetailComponent;
}());
exports.PhotoDetailComponent = PhotoDetailComponent;
//# sourceMappingURL=photo-detail.component.js.map