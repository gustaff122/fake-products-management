import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditSpecialOfferRoutingModule } from './edit-special-offer-routing.module';
import { EditSpecialOfferRoutingComponent } from './edit-special-offer-routing.component';
import { FormStepHeaderComponent } from '@fake-products-management/ui/atoms/form-step-header/form-step-header.component';

@NgModule({
  declarations: [
    EditSpecialOfferRoutingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditSpecialOfferRoutingModule,
    FormStepHeaderComponent,
  ],
})
export class EditSpecialOfferModule {
}