import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Photo } from './shared/photo';
import { PhotoService } from './shared/photo.service';

@Component({
    selector: 'photo-gallery',
    templateUrl: 'app/photo-gallery/photo-gallery.component.html',
    styleUrls: ['app/photo-gallery/photo-gallery.component.css']
})

export class PhotoGalleryComponent implements OnInit
{
    title = 'Photo Gallery';
    photos: Photo[];
    selectedPhoto: Photo;

    constructor(private router: Router, private photoService: PhotoService) {}

    getPhotos(){
        this.photoService.getPhotos().then(photos => this.photos = photos);
    }
    
    getRandomPhoto() {
        var count = this.photoService.getPhotoCount();
        var randomIndex = Math.floor(Math.random() * count) + 1;

        this.photoService.getPhoto(randomIndex).then(photo => this.selectedPhoto = photo)
    }

    ngOnInit() {
        this.getPhotos();
        this.getRandomPhoto();
    }

    onSelect(photo: Photo) {
        this.selectedPhoto = photo;
    }
}