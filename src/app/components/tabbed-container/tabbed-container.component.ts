import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostDto } from 'src/app/dto/PostDto';
import { InvestmentsService } from '../../services/investments.service'
import { InvestmentGroupDto } from '../../dto/InvestmentGroupDto'

@Component({
  selector: 'app-tabbed-container',
  templateUrl: './tabbed-container.component.html',
  styleUrls: ['./tabbed-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabbedContainerComponent implements OnInit {

  investmentsDto : InvestmentGroupDto[] = [];

  constructor(private investmentsService : InvestmentsService) { }

  ngOnInit(): void {
    this.investmentsService.getInvestments().subscribe((investments) => {
      this.investmentsDto = investments;
    })
  }

}
