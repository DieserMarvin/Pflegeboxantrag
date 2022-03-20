import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent {
  
  insuranceNumber = "";
  insuranceCompany ="";
  
  isVisible: any;
  isSelected: boolean = true;

}
