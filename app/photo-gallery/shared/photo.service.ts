import { Injectable } from '@angular/core';
import { PHOTOS } from '../../data/photo.data';

@Injectable()
export class PhotoService{
    getPhoto(id: number) {
        return this.getPhotos().then(photos => photos.find(photo => photo.id === id))
    }

    getPhotos() {
        return Promise.resolve(PHOTOS);
    }

    getPhotoCount() {
        return PHOTOS.length;
    }
}