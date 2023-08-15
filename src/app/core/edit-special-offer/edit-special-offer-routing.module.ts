import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSpecialOfferRoutingComponent } from './edit-special-offer-routing.component';
import { EditSpecialOfferDefinitionFormComponent } from './views/edit-special-offer-definition-form/edit-special-offer-definition-form.component';
import { EditSpecialOfferDummyFormComponent } from './views/edit-special-offer-dummy-form/edit-special-offer-dummy-form.component';
import { EditSpecialOfferSummaryComponent } from './views/edit-special-offer-summary/edit-special-offer-summary.component';
import { SPECIAL_OFFER } from '../../resolvers/special-offer-resolver/special-offer.key';
import { doesOfferExistGuard } from '@fake-products-management/guards/does-offer-exist/does-offer-exist.guard';
import { specialOfferResolver } from '@fake-products-management/resolvers/special-offer-resolver/special-offer.resolver';

const routes: Routes = [
  {
    path: ':marketingName',
    component: EditSpecialOfferRoutingComponent,
    canActivate: [ doesOfferExistGuard ],
    resolve: {
      [SPECIAL_OFFER]: specialOfferResolver,
    },
    children: [
      {
        path: '',
        redirectTo: 'definition',
        pathMatch: 'full',
      },
      {
        path: 'definition',
        component: EditSpecialOfferDefinitionFormComponent,
      },
      {
        path: 'choose-products',
        component: EditSpecialOfferDummyFormComponent,
        canActivate: [],
      },
      {
        path: 'exclude-products',
        component: EditSpecialOfferDummyFormComponent,
        canActivate: [],
      },
      {
        path: 'bonus-products',
        component: EditSpecialOfferDummyFormComponent,
        canActivate: [],
      },
      {
        path: 'products-limits',
        component: EditSpecialOfferDummyFormComponent,
        canActivate: [],
      },
      {
        path: 'choose-clients',
        component: EditSpecialOfferDummyFormComponent,
        canActivate: [],
      },
      {
        path: 'exclude-clients',
        component: EditSpecialOfferDummyFormComponent,
        canActivate: [],
      },
      {
        path: 'clients-limits',
        component: EditSpecialOfferDummyFormComponent,
        canActivate: [],
      },
      {
        path: 'summary',
        component: EditSpecialOfferSummaryComponent,
        canActivate: [],
      },
      {
        path: '**',
        redirectTo: 'definition',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class EditSpecialOfferRoutingModule {
}