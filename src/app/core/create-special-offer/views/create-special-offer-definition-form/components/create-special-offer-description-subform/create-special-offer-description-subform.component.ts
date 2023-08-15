import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateSpecialOfferDescriptionSubform } from '../../../../create-special-offer-routing.component';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-special-offer-description-subform',
  templateUrl: './create-special-offer-description-subform.component.html',
  styleUrls: [ './create-special-offer-description-subform.component.scss' ],
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

export class CreateSpecialOfferDescriptionSubformComponent implements OnInit {

  public form: FormGroup<CreateSpecialOfferDescriptionSubform>;

  constructor(
    private readonly controlContainer: ControlContainer,
  ) {
  }

  public ngOnInit(): void {
    this.form = this.controlContainer.control.get('description') as FormGroup<CreateSpecialOfferDescriptionSubform>;
  }
}