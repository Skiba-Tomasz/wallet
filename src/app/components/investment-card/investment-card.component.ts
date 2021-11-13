import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-card',
  templateUrl: './investment-card.component.html',
  styleUrls: ['./investment-card.component.css']
})
export class InvestmentCardComponent implements OnInit {

  @Input() text: string;

  constructor() {
    this.text = "No content";
  }

  ngOnInit(): void {
  }

}
