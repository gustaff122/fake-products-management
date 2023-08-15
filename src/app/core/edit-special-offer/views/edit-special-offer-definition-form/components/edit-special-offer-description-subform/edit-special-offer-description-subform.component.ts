import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { EditSpecialOfferDescriptionSubform } from '../../../../edit-special-offer-routing.component';

@Component({
  selector: 'app-edit-special-offer-description-subform',
  templateUrl: './edit-special-offer-description-subform.component.html',
  styleUrls: [ './edit-special-offer-description-subform.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatInputModule,
  ],
})

export class EditSpecialOfferDescriptionSubformComponent implements OnInit {

  public form: FormGroup<EditSpecialOfferDescriptionSubform>;

  constructor(
    private readonly controlContainer: ControlContainer,
  ) {
  }

  public ngOnInit(): void {
    this.form = this.controlContainer.control.get('description') as FormGroup<EditSpecialOfferDescriptionSubform>;
  }
}