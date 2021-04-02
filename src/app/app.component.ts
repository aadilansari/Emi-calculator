import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  Amount= 0;
  Year = 0;
  ROI = 0;
  totalPay:any ="";
  monthly:any ="";
  emi:any="";

  
  
  onSubmit(frm: any){
    console.log(frm)
    this.Amount= frm.value.txtamount;
 this.Year = this.value;
  this.ROI = frm.value.txtint;
  this.Calculate()
  console.log(this.value);
}

Calculate()
 {

  console.log("Loan" + this.Amount, " Years " +this.Year, " Rate " +this.ROI);

  this.ROI=this.ROI/(12*100);
    this.Year=this.Year*12;

  //this.emi = Number(this.Amount*(this.ROI/100)*this.Year);
  this.emi = (this.Amount*this.ROI*Math.pow(1+this.ROI,this.Year))/(Math.pow(1+this.ROI,this.Year)-1);


  /* this.totalPay = Number(this.emi * this.Amount); 
  this.monthly =Number( (this.Amount * this.emi)/(this.Year * 12)); */

 }

 value: number = 5;
 options: Options = {
   floor: 1,
   ceil: 10
 };
 
  }


