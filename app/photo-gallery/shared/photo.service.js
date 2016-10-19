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
var photo_data_1 = require('../../data/photo.data');
var PhotoService = (function () {
    function PhotoService() {
    }
    PhotoService.prototype.getPhoto = function (id) {
        return this.getPhotos().then(function (photos) { return photos.find(function (photo) { return photo.id === id; }); });
    };
    PhotoService.prototype.getPhotos = function () {
        return Promise.resolve(photo_data_1.PHOTOS);
    };
    PhotoService.prototype.getPhotoCount = function () {
        return photo_data_1.PHOTOS.length;
    };
    PhotoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PhotoService);
    return PhotoService;
}());
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map