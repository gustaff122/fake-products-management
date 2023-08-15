import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { SpecialOffer } from '@fake-products-management/models/special-offer';
import { Observable } from 'rxjs';
import { SpecialOffersService } from '@fake-products-management/services/special-offers-service/special-offers.service';

export const specialOfferResolver: ResolveFn<SpecialOffer> = (route: ActivatedRouteSnapshot): Observable<SpecialOffer> | Promise<SpecialOffer> | SpecialOffer => {
  const specialOffersService = inject(SpecialOffersService);
  const marketingName = route.params['marketingName'];

  return specialOffersService.getSpecialOffer(marketingName);
};