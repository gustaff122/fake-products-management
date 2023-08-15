import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-form-step-header',
  templateUrl: './form-step-header.component.html',
  styleUrls: [ './form-step-header.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
  ],
})

export class FormStepHeaderComponent {

  @Input() public number: number;
  @Input() public header: string;
  @Input() public disabled: boolean = false;
  @Input() public active: boolean = false;
}