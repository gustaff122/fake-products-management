import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditSpecialOfferDefinitionForm } from '../../edit-special-offer-routing.component';
import { EditSpecialOfferDescriptionSubformComponent } from './components/edit-special-offer-description-subform/edit-special-offer-description-subform.component';
import { EditSpecialOfferConditionsSubformComponent } from './components/edit-special-offer-conditions-subform/edit-special-offer-conditions-subform.component';

@Component({
  selector: 'app-edit-special-offer-definition-form',
  templateUrl: './edit-special-offer-definition-form.component.html',
  styleUrls: [ './edit-special-offer-definition-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    EditSpecialOfferDescriptionSubformComponent,
    EditSpecialOfferConditionsSubformComponent,
  ],
})

export class EditSpecialOfferDefinitionFormComponent implements OnInit {

  public form: FormGroup<EditSpecialOfferDefinitionForm>;

  constructor(
    private readonly controlContainer: ControlContainer,
  ) {
  }

  public ngOnInit(): void {
    this.form = this.controlContainer.control.get('definition') as FormGroup<EditSpecialOfferDefinitionForm>;
  }
}