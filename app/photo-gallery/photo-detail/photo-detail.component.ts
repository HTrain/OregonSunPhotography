import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../shared/photo';
import { PhotoService } from '../shared/photo.service';

@Component({
    selector: 'photo-detail',
    templateUrl: 'app/photo-gallery/photo-detail/photo-detail.component.html',
    styleUrls: ['app/photo-gallery/photo-detail/photo-detail.css']
})

export class PhotoDetailComponent implements OnInit, OnDestroy{
    photo: Photo;
    sub: any;
    
    constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.photoService.getPhoto(id).then(photo => this.photo = photo);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}