import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { ConfirmationModalData } from './confirmation-modal-data';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: [ './confirmation-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ],
})

export class ConfirmationModalComponent {

  constructor(
    @Inject(DIALOG_DATA) public readonly data: ConfirmationModalData,
    private readonly matDialogRef: MatDialogRef<ConfirmationModalComponent>,
  ) {
  }

  public closeHandler(): void {
    this.matDialogRef.close();
  }
}