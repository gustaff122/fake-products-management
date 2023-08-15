import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CreateSpecialOfferRoutingComponent } from '../../create-special-offer-routing.component';

@Component({
  selector: 'app-create-special-offer-summary',
  templateUrl: './create-special-offer-summary.component.html',
  styleUrls: [ './create-special-offer-summary.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})

export class CreateSpecialOfferSummaryComponent {

  public readonly formValid = this.createSpecialOfferRoutingComponent.form.valid;

  constructor(
    private readonly createSpecialOfferRoutingComponent: CreateSpecialOfferRoutingComponent,
  ) {
  }

  public submitHandler(): void {
    this.createSpecialOfferRoutingComponent.submit();
  }
}