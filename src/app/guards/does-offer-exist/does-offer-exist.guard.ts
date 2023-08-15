import { ActivatedRouteSnapshot, CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecialOffersService } from '@fake-products-management/services/special-offers-service/special-offers.service';

export const doesOfferExistGuard: CanActivateFn = (route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const router = inject(Router);
  const specialOffersService = inject(SpecialOffersService);

  const marketingName = route.params['marketingName'];
  const offers = specialOffersService.getSpecialOffersList();
  const selectedOffer = offers.find((item) => item.definition.description.marketingName === marketingName);

  if (selectedOffer) {
    return true;
  } else {
    return router.createUrlTree([ 'special-offers-list' ]);
  }
};