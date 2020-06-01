import { Component, ChangeDetectionStrategy, OnChanges, SimpleChanges, Input } from '@angular/core';
// Charts
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-line-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./line-graph.component.scss'],
  templateUrl: './line-graph.component.html'
})
export class LineGraphComponent implements OnChanges {

  @Input()
  sectionId: number[];
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#104a62',
      backgroundColor: '#e9f8fe',
      borderWidth: 1.5
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sectionId) {
      this.lineChartData = [
        { data: this.sectionId, label: 'Average' },
      ];
      this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    }
  }

}
