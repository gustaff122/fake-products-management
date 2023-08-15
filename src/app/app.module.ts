import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { titleProvider } from '@fake-products-management/providers/title-provider/title.provider';

const material = [
  MatNativeDateModule,
  MatSnackBarModule,
  MatDialogModule,
];

const materialProviders = [
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'always' } },
  { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2000, horizontalPosition: 'end', verticalPosition: 'top' } },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...material,
  ],
  providers: [
    ...materialProviders,
    titleProvider,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
