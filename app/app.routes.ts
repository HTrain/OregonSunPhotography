import { provideRouter, RouterConfig } from '@angular/router';

import { PhotoDetailComponent } from './photo-gallery/photo-detail/photo-detail.component';
import { PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: PhotoGalleryComponent
    },
    {
        path: 'detail',
        component: PhotoDetailComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];