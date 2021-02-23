import { Component, OnInit } from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {coerceNumberProperty} from "@angular/cdk/coercion";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  amountForm: FormGroup;
  autoTicks = false;
  autoTicks1 = false;
  disabled = false;
  invert = false;
  max = 300000;
  min = 100000;
  showTicks = false;
  step = 1;
  step1 = 1;
  thumbLabel = false;
  value = 0;
  value1 = 0;
  vertical = false;
  showTicks1 = false;
  public services: any = [];
  public services1: any = [];

  foods: Food[] = [
    {value: '3 Months', viewValue: '3 Months'},
    {value: '6 Months', viewValue: '6 Months'},
    {value: '9 Months', viewValue: '9 Months'}
  ];

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  get tickInterval1(): number | 'auto' {
    return this.showTicks1 ? (this.autoTicks1 ? 'auto' : this._tickInterval1) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;
  private _tickInterval1 = 1;

  onSliderChange(event: MatSliderChange) {
    console.log(event.value);
  }
  onSliderChange1(event: MatSliderChange) {
    console.log(event.value);
  }

  constructor(
    private fb: FormBuilder,
  ) {}
  ngOnInit(){
    this.amountForm = this.fb.group({
      amount: ['15000', Validators.required],
    })
    this.services = [
      {
        image: '../assets/images/Get Paid Instantly.png',
        title: 'Quick cash distribution',
        desc: 'Get terms loans that your business needs within 72 hrs'
      },
      {
        image: '../assets/images/Low interest rate.png',
        title: 'Low-interest rate',
        desc: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
      },
      {
        image: '../assets/images/Secure Payments.png',
        title: 'Zero Paperwork',
        desc: 'Get started instantly by submitting only your basic details & bank statements'
      }
    ];
    this.services1 = [
      {
        image: '../assets/images/freelancer_feature_icon_6@1.5x.png',
        title: 'Ace your business finances',
        desc: 'Manage banking, accounting & everything in between, on one platform'
      },
      {
        image: '../assets/images/Covid.png',
        title: 'Loans to fight COVID-19',
        desc: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'
      }
    ];

  }
  selectedValue: string;

}

