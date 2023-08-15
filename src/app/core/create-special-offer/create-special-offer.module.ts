import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSpecialOfferRoutingModule } from './create-special-offer-routing.module';
import { CreateSpecialOfferRoutingComponent } from './create-special-offer-routing.component';
import { FormStepHeaderComponent } from '@fake-products-management/ui/atoms/form-step-header/form-step-header.component';

@NgModule({
  declarations: [
    CreateSpecialOfferRoutingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateSpecialOfferRoutingModule,
    FormStepHeaderComponent,
  ],
})
export class CreateSpecialOfferModule {
}