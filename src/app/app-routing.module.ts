import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'special-offers-list',
    pathMatch: 'full',
  },
  {
    path: 'special-offers-list',
    loadComponent: () => import('@fake-products-management/core/special-offers-list/special-offers-list.component').then((c) => c.SpecialOffersListComponent),
  },
  {
    path: 'create-special-offer',
    loadChildren: () => import('@fake-products-management/core/create-special-offer/create-special-offer.module').then((m) => m.CreateSpecialOfferModule),
  },
  {
    path: 'edit-special-offer',
    loadChildren: () => import('@fake-products-management/core/edit-special-offer/edit-special-offer.module').then((m) => m.EditSpecialOfferModule),
  },
  {
    path: '**',
    redirectTo: 'special-offers-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
