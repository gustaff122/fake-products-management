import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateSpecialOfferConditionsSubform } from '../../../../create-special-offer-routing.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-special-offer-conditions-subform',
  templateUrl: './create-special-offer-conditions-subform.component.html',
  styleUrls: [ './create-special-offer-conditions-subform.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
})

export class CreateSpecialOfferConditionsSubformComponent implements OnInit {

  public form: FormGroup<CreateSpecialOfferConditionsSubform>;

  constructor(
    private readonly controlContainer: ControlContainer,
  ) {
  }

  public ngOnInit(): void {
    this.form = this.controlContainer.control.get('conditions') as FormGroup<CreateSpecialOfferConditionsSubform>;
  }
}