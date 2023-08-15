import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderType } from '@fake-products-management/models/order-type';
import { Portal } from '@fake-products-management/models/portal';
import { OrderPriceConditions } from '@fake-products-management/models/order-price-conditions';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpecialOffersService } from '@fake-products-management/services/special-offers-service/special-offers.service';
import { SPECIAL_OFFER } from '../../resolvers/special-offer-resolver/special-offer.key';


export interface EditSpecialOfferDescriptionSubform {
  marketingName: FormControl<string>;
  technicalName: FormControl<string>;
  description: FormControl<string>;
}

export interface EditSpecialOfferConditionsSubform {
  portal: FormControl<Portal>;
  orderType: FormControl<OrderType>;
  benefitAmount: FormControl<number>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
  priceConditions: FormControl<OrderPriceConditions>;
  connectedWithOtherPromotions: FormControl<boolean>;
  backPromotion: FormControl<boolean>;
}

export interface EditSpecialOfferDefinitionForm {
  description: FormGroup<EditSpecialOfferDescriptionSubform>;
  conditions: FormGroup<EditSpecialOfferConditionsSubform>;
}

export interface EditSpecialOfferForm {
  definition: FormGroup<EditSpecialOfferDefinitionForm>;
}

@Component({
  selector: 'app-edit-special-offer-routing',
  templateUrl: './edit-special-offer-routing.component.html',
  styleUrls: [ './edit-special-offer-routing.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EditSpecialOfferRoutingComponent implements OnInit, OnDestroy {

  public form: FormGroup<EditSpecialOfferForm>;
  public subscriptions: Subscription = new Subscription();
  public routePath = this.router.url.split('/').pop();

  public ngOnInit(): void {
    this.buildForm();

    this.subscriptions.add(
      this.router.events.subscribe(() => {
        this.routePath = this.router.url.split('/').pop();
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly specialOffersService: SpecialOffersService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  private buildForm(): void {
    const offer = this.activatedRoute.snapshot.data[SPECIAL_OFFER];

    this.form = this.formBuilder.group<EditSpecialOfferForm>({
      definition: this.formBuilder.group<EditSpecialOfferDefinitionForm>({
        description: this.formBuilder.group<EditSpecialOfferDescriptionSubform>({
          marketingName: new FormControl(null, [ Validators.required, Validators.maxLength(32) ]),
          technicalName: new FormControl(null, [ Validators.maxLength(32) ]),
          description: new FormControl(null, Validators.maxLength(4096)),
        }),
        conditions: this.formBuilder.group<EditSpecialOfferConditionsSubform>({
          portal: new FormControl(null, [ Validators.required ]),
          orderType: new FormControl(null, [ Validators.required ]),
          benefitAmount: new FormControl(null),
          startDate: new FormControl(null, [ Validators.required ]),
          endDate: new FormControl(null),
          priceConditions: new FormControl('business'),
          connectedWithOtherPromotions: new FormControl(false),
          backPromotion: new FormControl(false),
        }),
      }),
    });

    this.form.patchValue(offer);
  }

  public submit(): void {
    if (this.form.valid) {
      this.specialOffersService.editSpecialOffer(this.form.getRawValue());
    }
  }
}