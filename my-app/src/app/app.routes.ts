import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'items',
    loadChildren: () => import('./items/items.routes').then(m => m.ITEMS_ROUTES)
  },
  { path: '**', component: PageNotFoundComponent }
];
