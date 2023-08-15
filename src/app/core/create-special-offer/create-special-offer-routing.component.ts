import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderType } from '@fake-products-management/models/order-type';
import { Portal } from '@fake-products-management/models/portal';
import { OrderPriceConditions } from '@fake-products-management/models/order-price-conditions';
import { Router } from '@angular/router';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { SpecialOffersService } from '@fake-products-management/services/special-offers-service/special-offers.service';


export interface CreateSpecialOfferDescriptionSubform {
  marketingName: FormControl<string>;
  technicalName: FormControl<string>;
  description: FormControl<string>;
}

export interface CreateSpecialOfferConditionsSubform {
  portal: FormControl<Portal>;
  orderType: FormControl<OrderType>;
  benefitAmount: FormControl<number>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
  priceConditions: FormControl<OrderPriceConditions>;
  connectedWithOtherPromotions: FormControl<boolean>;
  backPromotion: FormControl<boolean>;
}

export interface CreateSpecialOfferDefinitionForm {
  description: FormGroup<CreateSpecialOfferDescriptionSubform>;
  conditions: FormGroup<CreateSpecialOfferConditionsSubform>;
}

export interface CreateSpecialOfferForm {
  definition: FormGroup<CreateSpecialOfferDefinitionForm>;
}

@Component({
  selector: 'app-create-special-offer-routing',
  templateUrl: './create-special-offer-routing.component.html',
  styleUrls: [ './create-special-offer-routing.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateSpecialOfferRoutingComponent implements OnInit, OnDestroy {

  public form: FormGroup<CreateSpecialOfferForm>;
  public subscriptions: Subscription = new Subscription();
  public routePath = this.router.url.split('/').pop();

  public ngOnInit(): void {
    this.buildForm();

    this.subscriptions.add(
      this.router.events.subscribe(() => {
        this.routePath = this.router.url.split('/').pop();
      }),
    );

    this.subscriptions.add(
      this.form.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
        this.specialOffersService.saveSpecialOfferDraft(this.form.value);
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
  ) {
  }

  private buildForm(): void {
    const draft = this.specialOffersService.getSpecialOfferDraft();

    this.form = this.formBuilder.group<CreateSpecialOfferForm>({
      definition: this.formBuilder.group<CreateSpecialOfferDefinitionForm>({
        description: this.formBuilder.group<CreateSpecialOfferDescriptionSubform>({
          marketingName: new FormControl(null, [ Validators.required, Validators.maxLength(32) ]),
          technicalName: new FormControl(null, [ Validators.maxLength(32) ]),
          description: new FormControl(null, Validators.maxLength(4096)),
        }),
        conditions: this.formBuilder.group<CreateSpecialOfferConditionsSubform>({
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

    this.form.patchValue(draft);

    if (draft) {
      this.form.markAllAsTouched();
    }
  }

  public submit(): void {
    if (this.form.valid) {
      this.specialOffersService.createSpecialOffer(this.form.getRawValue());
    }
  }
}