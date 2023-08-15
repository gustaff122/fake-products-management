import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialOffersService } from '@fake-products-management/services/special-offers-service/special-offers.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-special-offers-list',
  templateUrl: './special-offers-list.component.html',
  styleUrls: [ './special-offers-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ],
})

export class SpecialOffersListComponent {

  public specialOffers = this.specialOffersService.getSpecialOffersList();
  public readonly displayedColumns: string[] = [ 'number', 'marketingName', 'actions' ];

  constructor(
    private readonly specialOffersService: SpecialOffersService,
    private readonly matDialog: MatDialog,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  public deleteSpecialOfferHandler(marketingName: string): void {
    import('@fake-products-management/modals/confirmation-modal/confirmation-modal.component').then(({ ConfirmationModalComponent }) => {
      this.matDialog.open(ConfirmationModalComponent, {
        data: {
          title: 'Do you want to delete offer',
          subtitle: marketingName,
        },
      }).afterClosed().subscribe((confirmation) => {
        if (confirmation) {
          this.specialOffersService.deleteSpecialOffer(marketingName);
          this.specialOffers = this.specialOffersService.getSpecialOffersList();
          this.changeDetectorRef.detectChanges();
        }
      });
    });
  }
}