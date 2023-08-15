import { Injectable } from '@angular/core';
import { LocalStorageProvider } from '@fake-products-management/providers/local-storage-provider/local-storage.provider';
import { SpecialOfferDraft } from '@fake-products-management/models/special-offer-draft';
import { SpecialOffer } from '@fake-products-management/models/special-offer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpecialOffersService {

  constructor(
    private readonly localStorageProvider: LocalStorageProvider,
    private readonly matSnackBar: MatSnackBar,
    private readonly router: Router,
  ) {
  }

  public saveSpecialOfferDraft(formValue: SpecialOfferDraft): void {
    this.localStorageProvider.setItem('draft', JSON.stringify(formValue));
  }

  public getSpecialOfferDraft(): SpecialOfferDraft {
    return JSON.parse(this.localStorageProvider.getItem('draft'));
  }

  public createSpecialOffer(specialOffer: SpecialOffer): void {
    const offers = JSON.parse(this.localStorageProvider.getItem('offers')) || [];
    const duplicate = offers.find((item: SpecialOffer) => item.definition.description.marketingName === specialOffer.definition.description.marketingName);

    if (duplicate) {
      this.matSnackBar.open('Marketing name is already in use.');
    } else {
      offers.push(specialOffer);
      this.localStorageProvider.setItem('offers', JSON.stringify(offers));
      this.matSnackBar.open('Special offer has been added.');
      this.localStorageProvider.removeItem('draft');
      this.router.navigate([ '/special-offers-list' ]);
    }
  };

  public getSpecialOffersList(): SpecialOffer[] {
    return JSON.parse(this.localStorageProvider.getItem('offers')) || [];
  }

  public getSpecialOffer(marketingName: string): SpecialOffer {
    const offers = JSON.parse(this.localStorageProvider.getItem('offers')) || [];
    return offers.find((item: SpecialOffer) => item.definition.description.marketingName === marketingName);
  }

  public editSpecialOffer(specialOffer: SpecialOffer): void {
    let offers = JSON.parse(this.localStorageProvider.getItem('offers'));
    const offerIndex = offers.findIndex((item: SpecialOffer) => item.definition.description.marketingName === specialOffer.definition.description.marketingName);

    offers[offerIndex] = specialOffer;
    this.localStorageProvider.setItem('offers', JSON.stringify(offers));
    this.matSnackBar.open('Special offer has been updated.');
    this.router.navigate([ '/special-offers-list' ]);
  }

  public deleteSpecialOffer(marketingName: string): void {
    let offers = JSON.parse(this.localStorageProvider.getItem('offers'));
    offers = offers.filter((item: SpecialOffer) => item.definition.description.marketingName !== marketingName);

    this.localStorageProvider.setItem('offers', JSON.stringify(offers));
    this.matSnackBar.open('Special offer has been deleted.');
  }
}