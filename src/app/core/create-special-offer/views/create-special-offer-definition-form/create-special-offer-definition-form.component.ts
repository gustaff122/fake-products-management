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
import { CreateSpecialOfferDefinitionForm } from '../../create-special-offer-routing.component';
import { CreateSpecialOfferDescriptionSubformComponent } from './components/edit-special-offer-description-subform/create-special-offer-description-subform.component';
import { CreateSpecialOfferConditionsSubformComponent } from './components/edit-special-offer-conditions-subform/create-special-offer-conditions-subform.component';

@Component({
  selector: 'app-create-special-offer-definition-form',
  templateUrl: './create-special-offer-definition-form.component.html',
  styleUrls: [ './create-special-offer-definition-form.component.scss' ],
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
    CreateSpecialOfferDescriptionSubformComponent,
    CreateSpecialOfferConditionsSubformComponent,
  ],
})

export class CreateSpecialOfferDefinitionFormComponent implements OnInit {

  public form: FormGroup<CreateSpecialOfferDefinitionForm>;

  constructor(
    private readonly controlContainer: ControlContainer,
  ) {
  }

  public ngOnInit(): void {
    this.form = this.controlContainer.control.get('definition') as FormGroup<CreateSpecialOfferDefinitionForm>;
  }
}