import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { EditSpecialOfferConditionsSubform } from '../../../../edit-special-offer-routing.component';

@Component({
  selector: 'app-edit-special-offer-conditions-subform',
  templateUrl: './edit-special-offer-conditions-subform.component.html',
  styleUrls: [ './edit-special-offer-conditions-subform.component.scss' ],
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

export class EditSpecialOfferConditionsSubformComponent implements OnInit {

  public form: FormGroup<EditSpecialOfferConditionsSubform>;

  constructor(
    private readonly controlContainer: ControlContainer,
  ) {
  }

  public ngOnInit(): void {
    this.form = this.controlContainer.control.get('conditions') as FormGroup<EditSpecialOfferConditionsSubform>;
  }
}