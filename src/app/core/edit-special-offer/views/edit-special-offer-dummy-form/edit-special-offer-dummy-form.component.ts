import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-special-offer-dummy-form',
  templateUrl: './edit-special-offer-dummy-form.component.html',
  styleUrls: [ './edit-special-offer-dummy-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
  ],
})

export class EditSpecialOfferDummyFormComponent {
}