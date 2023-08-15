import { ActivatedRouteSnapshot, CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecialOffersService } from '@fake-products-management/services/special-offers-service/special-offers.service';

export const hasDraftMarketingOrTechnicalNameGuard: CanActivateFn = (_route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const router = inject(Router);
  const specialOffersService = inject(SpecialOffersService);

  const draft = specialOffersService.getSpecialOfferDraft();

  if ((draft && draft.definition.description.marketingName) || (draft && draft.definition.description.technicalName)) {
    return true;
  } else {
    return router.createUrlTree([ 'special-offers-list' ]);
  }
};