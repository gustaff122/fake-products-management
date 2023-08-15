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
        title: 'Edit definition',
      },
      {
        path: 'choose-products',
        component: EditSpecialOfferDummyFormComponent,
        title: 'Choose products',
      },
      {
        path: 'exclude-products',
        component: EditSpecialOfferDummyFormComponent,
        title: 'Exclude products',
      },
      {
        path: 'bonus-products',
        component: EditSpecialOfferDummyFormComponent,
        title: 'Add bonuses',
      },
      {
        path: 'products-limits',
        component: EditSpecialOfferDummyFormComponent,
        title: 'Limit products',
      },
      {
        path: 'choose-clients',
        component: EditSpecialOfferDummyFormComponent,
        title: 'Choose clients',
      },
      {
        path: 'exclude-clients',
        component: EditSpecialOfferDummyFormComponent,
        title: 'Exclude products',
      },
      {
        path: 'clients-limits',
        component: EditSpecialOfferDummyFormComponent,
        title: 'Limit clients',
      },
      {
        path: 'summary',
        component: EditSpecialOfferSummaryComponent,
        title: 'Summary',
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