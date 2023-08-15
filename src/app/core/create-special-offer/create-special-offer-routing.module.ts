import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSpecialOfferRoutingComponent } from './create-special-offer-routing.component';
import { CreateSpecialOfferDefinitionFormComponent } from './views/create-special-offer-definition-form/create-special-offer-definition-form.component';
import { CreateSpecialOfferDummyFormComponent } from './views/create-special-offer-dummy-form/create-special-offer-dummy-form.component';
import { CreateSpecialOfferSummaryComponent } from './views/create-special-offer-summary/create-special-offer-summary.component';
import { hasDraftMarketingOrTechnicalNameGuard } from '@fake-products-management/guards/has-draft-marketing-name-guard/has-draft-marketing-or-technical-name.guard';

const routes: Routes = [
  {
    path: '',
    component: CreateSpecialOfferRoutingComponent,
    children: [
      {
        path: '',
        redirectTo: 'definition',
        pathMatch: 'full',
      },
      {
        path: 'definition',
        component: CreateSpecialOfferDefinitionFormComponent,
        title: 'Create definition',
      },
      {
        path: 'choose-products',
        component: CreateSpecialOfferDummyFormComponent,
        title: 'Choose products',
        canActivate: [ hasDraftMarketingOrTechnicalNameGuard ],
      },
      {
        path: 'exclude-products',
        component: CreateSpecialOfferDummyFormComponent,
        title: 'Exclude products',
        canActivate: [ hasDraftMarketingOrTechnicalNameGuard ],
      },
      {
        path: 'bonus-products',
        component: CreateSpecialOfferDummyFormComponent,
        title: 'Add bonuses',
        canActivate: [ hasDraftMarketingOrTechnicalNameGuard ],
      },
      {
        path: 'products-limits',
        component: CreateSpecialOfferDummyFormComponent,
        title: 'Limit products',
        canActivate: [ hasDraftMarketingOrTechnicalNameGuard ],
      },
      {
        path: 'choose-clients',
        component: CreateSpecialOfferDummyFormComponent,
        title: 'Choose clients',
        canActivate: [ hasDraftMarketingOrTechnicalNameGuard ],
      },
      {
        path: 'exclude-clients',
        component: CreateSpecialOfferDummyFormComponent,
        title: 'Exclude products',
        canActivate: [ hasDraftMarketingOrTechnicalNameGuard ],
      },
      {
        path: 'clients-limits',
        component: CreateSpecialOfferDummyFormComponent,
        title: 'Limit clients',
        canActivate: [ hasDraftMarketingOrTechnicalNameGuard ],
      },
      {
        path: 'summary',
        component: CreateSpecialOfferSummaryComponent,
        title: 'Summary',
        canActivate: [ hasDraftMarketingOrTechnicalNameGuard ],
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
export class CreateSpecialOfferRoutingModule {
}