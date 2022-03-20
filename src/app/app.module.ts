import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BoxFormComponent } from './box-form/box-form.component';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { InsuranceFormComponent } from './insurance-form/insurance-form.component';
import { BoxSelectionComponent } from './box-selection/box-selection.component';
import { RecaptchaModule } from 'ng-recaptcha';


@NgModule({
  declarations: [
    AppComponent,
    BoxFormComponent,
    AdressFormComponent,
    InsuranceFormComponent,
    BoxSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RecaptchaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

