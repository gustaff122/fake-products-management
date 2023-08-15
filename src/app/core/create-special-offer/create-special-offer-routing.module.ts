import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSpecialOfferRoutingComponent } from './create-special-offer-routing.component';
import { CreateSpecialOfferDefinitionFormComponent } from './views/create-special-offer-definition-form/create-special-offer-definition-form.component';
import { CreateSpecialOfferDummyFormComponent } from './views/create-special-offer-dummy-form/create-special-offer-dummy-form.component';
import { CreateSpecialOfferSummaryComponent } from './views/create-special-offer-summary/create-special-offer-summary.component';
import { hasDraftMarketingNameGuard } from '@fake-products-management/guards/has-draft-marketing-name-guard/has-draft-marketing-name.guard';

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
      },
      {
        path: 'choose-products',
        component: CreateSpecialOfferDummyFormComponent,
        canActivate: [ hasDraftMarketingNameGuard ],
      },
      {
        path: 'exclude-products',
        component: CreateSpecialOfferDummyFormComponent,
        canActivate: [ hasDraftMarketingNameGuard ],
      },
      {
        path: 'bonus-products',
        component: CreateSpecialOfferDummyFormComponent,
        canActivate: [ hasDraftMarketingNameGuard ],
      },
      {
        path: 'products-limits',
        component: CreateSpecialOfferDummyFormComponent,
        canActivate: [ hasDraftMarketingNameGuard ],
      },
      {
        path: 'choose-clients',
        component: CreateSpecialOfferDummyFormComponent,
        canActivate: [ hasDraftMarketingNameGuard ],
      },
      {
        path: 'exclude-clients',
        component: CreateSpecialOfferDummyFormComponent,
        canActivate: [ hasDraftMarketingNameGuard ],
      },
      {
        path: 'clients-limits',
        component: CreateSpecialOfferDummyFormComponent,
        canActivate: [ hasDraftMarketingNameGuard ],
      },
      {
        path: 'summary',
        component: CreateSpecialOfferSummaryComponent,
        canActivate: [ hasDraftMarketingNameGuard ],
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