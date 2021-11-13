import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostDto } from 'src/app/dto/PostDto';
import { InvestmentsService } from '../../../services/investments.service'
import { InvestmentGroupDto } from '../../../dto/InvestmentGroupDto'

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabContainerComponent implements OnInit {

  investmentsDto : InvestmentGroupDto[] = [];

  constructor(private investmentsService : InvestmentsService) { }

  ngOnInit(): void {
    this.investmentsService.getInvestments().subscribe((investments) => {
      this.investmentsDto = investments;
    })
  }

}
