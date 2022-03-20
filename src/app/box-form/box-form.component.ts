import { Component, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Customer } from '../Customer';
import { ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoxSelectionComponent } from '../box-selection/box-selection.component';
import { InsuranceFormComponent } from '../insurance-form/insurance-form.component';
import { AdressFormComponent } from '../adress-form/adress-form.component';


@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.css']
})


export class BoxFormComponent{
  
  isDifferent = false;
  
  public resolved(captchaResponse: string) { 
    console.log(`Resolved captcha with response: ${captchaResponse}`); // Write your logic here about once human verified what action you want to perform 
    }
  
}
