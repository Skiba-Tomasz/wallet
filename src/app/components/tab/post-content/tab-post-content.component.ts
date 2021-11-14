import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { LinearGraphDataDto } from 'src/app/dto/LinearGraphDataDto';
import { GraphSeriesService } from 'src/app/services/graph-series.service';

const WINDOW_BREAKING_POINT: number = 1000;
const WINDOW_BREAKING_POINT_LEGEND: number = 1300;

@Component({
  selector: 'app-tab-post-content',
  templateUrl: './tab-post-content.component.html',
  styleUrls: ['./tab-post-content.component.css']
})
export class TabPostContentComponent implements OnInit {
  @Input() symbol!: string;
  step: number = 0;
  legendPosition: LegendPosition = LegendPosition.Right;
  graphData!: LinearGraphDataDto;
  view: any[2];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private service: GraphSeriesService) {
  }

  ngOnInit(): void {
    this._calculateGraphDimension();
  }

  setStep(step: number): void {
    this.step = step;
  }

  openGraph() {
    if (this.symbol == undefined) {
      console.log("Problem with post data. Symbol not found");
      return;
    }
    if (this.graphData == undefined) {
      this.service.getSeries(this.symbol).subscribe((data) => {
        this.graphData = data;
        this.setStep(1);
      });
    }
  }

  onResize(event: any) {
    this._calculateGraphDimension();
  }

  _calculateGraphDimension() {
    console.log('Changing')
    if (window.outerWidth < WINDOW_BREAKING_POINT) {
      this.view = [window.outerWidth * 0.8, window.outerWidth * 0.8];
    } else {
      this.view = [window.outerWidth * 0.5, WINDOW_BREAKING_POINT/2];
    }
    if(window.outerWidth < WINDOW_BREAKING_POINT_LEGEND){
      this.legendPosition = LegendPosition.Below;
    } else {
      this.legendPosition = LegendPosition.Right;
    }
  }
}
