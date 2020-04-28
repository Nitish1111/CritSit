import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { ConsoleComponent } from '../../console/console.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'console',           component: ConsoleComponent }
];
