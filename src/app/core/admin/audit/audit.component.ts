import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

import { AuditData } from './database';

const data = {
  chart: {
    enablesmartlabels: "1",
    showlabels: "1",
    usedataplotcolorforlabels: "1",
    plottooltext: "$label, <b>$value</b> MMbbl",
    theme: "fusion"
  },
  data: [
    {
      label: "Penyerahan",
      value: "1290"
    },
    {
      label: "Permohonan",
      value: "920"
    },
    {
      label: "Diluluskan",
      value: "680"
    },
    {
      label: "Ditolak",
      value: "340"
    }
  ]
};

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  public loadedData = AuditData

  width = '100%';
  height = '100%';
  type = "doughnut3d";
  dataFormat = "json";
  dataSource = data;

  constructor(
    public zone: NgZone
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(
      () => {
        this.initChart()
      }
    )
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Penyerahan",
        value: 401
      },
      {
        country: "Permohonan",
        value: 300
      },
      {
        country: "Ditolak",
        value: 200
      }
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    chart.legend = new am4charts.Legend();
  }

}
