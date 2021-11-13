import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LinearGraphDataDto } from 'src/app/dto/LinearGraphDataDto';
import { GraphSeriesService } from 'src/app/services/graph-series.service';

@Component({
  selector: 'app-tab-post-content',
  templateUrl: './tab-post-content.component.html',
  styleUrls: ['./tab-post-content.component.css']
})
export class TabPostContentComponent implements OnInit {
  step : number = 0;
  graphData!: LinearGraphDataDto;
  view: any[2] = [700, 300];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private service: GraphSeriesService) {
   }

  ngOnInit(): void {
    this.service.getSeries("PKO").subscribe((data) => this.graphData = data);
  }

  setStep(step:number) : void{
    this.step= step;
  }
}
