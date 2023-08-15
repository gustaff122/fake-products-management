import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EditSpecialOfferRoutingComponent } from '../../edit-special-offer-routing.component';

@Component({
  selector: 'app-edit-special-offer-summary',
  templateUrl: './edit-special-offer-summary.component.html',
  styleUrls: [ './edit-special-offer-summary.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})

export class EditSpecialOfferSummaryComponent {

  public readonly formValid = this.createSpecialOfferRoutingComponent.form.valid;

  constructor(
    private readonly createSpecialOfferRoutingComponent: EditSpecialOfferRoutingComponent,
  ) {
  }

  public submitHandler(): void {
    this.createSpecialOfferRoutingComponent.submit();
  }
}