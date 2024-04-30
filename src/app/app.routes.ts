import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [

    {title: "SMART TECH | Home", path:'' , component: HeaderComponent},
    {title: "SMART TECH | Home", path:'home' , component: HeaderComponent},
    {title: "SMART TECH | About", path:'about' , component: AboutComponent},
    {title: "SMART TECH | Client", path:'clients' , component: ClientsComponent},
    {title: "SMART TECH | Gallery", path:'gallery' , component: GalleryComponent},
    {title: "SMART TECH | Services", path:'services' , component: ServicesComponent},
    {title: "SMART TECH | Not Found", path:'**' , component: NotfoundComponent},

];
