import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../Customer';
import  { NgForm } from '@angular/forms'


@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.css']
})
export class AdressFormComponent{

  customer = new Customer("", "", "", "", "",);
  isValid = false;


}
