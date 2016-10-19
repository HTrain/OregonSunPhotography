import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { PhotoService } from './photo-gallery/shared/photo.service';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [PhotoService]
})

export class AppComponent {
    title = 'Oregon Sun Photography';
}