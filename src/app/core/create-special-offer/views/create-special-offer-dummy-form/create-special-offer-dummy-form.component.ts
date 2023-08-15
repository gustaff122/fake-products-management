import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-special-offer-dummy-form',
  templateUrl: './create-special-offer-dummy-form.component.html',
  styleUrls: [ './create-special-offer-dummy-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
  ],
})

export class CreateSpecialOfferDummyFormComponent {
}