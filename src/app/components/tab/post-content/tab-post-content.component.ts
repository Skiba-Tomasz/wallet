import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-tab-post-content',
  templateUrl: './tab-post-content.component.html',
  styleUrls: ['./tab-post-content.component.css']
})
export class TabPostContentComponent implements OnInit {

  step : number = 0;

  saleData = [
    { name: "Mobiles", value: 1050 },
    { name: "Laptop", value: 500 },
    { name: "AC", value: 150 },
    { name: "Headset", value: 1500 },
    { name: "Fridge", value: 200 }
  ];


  constructor() {
   }

  ngOnInit(): void {
  }

  setStep(step:number) : void{
    this.step= step;
  }
}
