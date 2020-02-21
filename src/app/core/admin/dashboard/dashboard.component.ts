import { Component, OnInit, NgZone } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const dataChartOne = {
  chart: {
    showvalues: "1",
    theme: "fusion",
    canvasPadding: "0",
    chartTopMargin: "0",
    palettecolors: "5d62b5,29c3be,f2726f"
  },
  data: [
    {
      label: "Kategori 1",
      value: "1000"
    },
    {
      label: "Kategori 2",
      value: "920"
    },
    {
      label: "Kategori 3",
      value: "826"
    },
    {
      label: "Kategori 4",
      value: "704"
    },
    {
      label: "Kategori 5",
      value: "681"
    },
    {
      label: "Kategori 6",
      value: "621"
    },
    {
      label: "Kategori 7",
      value: "600"
    },
    {
      label: "Kategori 8",
      value: "554"
    },
    {
      label: "Kategori 9",
      value: "502"
    },
    {
      label: "Kategori 10",
      value: "419"
    }
  ]
};

const dataChartTwo = {
  chart: {
    yaxisname: "Jumlah",
    aligncaptionwithcanvas: "0",
    chartTopMargin: "0",
    plottooltext: "<b>$dataValue</b>",
    theme: "fusion",
    palettecolors: "D84315"
  },
  data: [
    {
      label: "Jenis 4",
      value: "49"
    },
    {
      label: "Jenis 3",
      value: "39"
    },
    {
      label: "Jenis 1",
      value: "38"
    },
    {
      label: "Jenis 5",
      value: "32"
    },
    {
      label: "Jenis 2",
      value: "26"
    }
  ]
};

const dataChartThree = {
  chart: {
    showvalues: "1",
    showpercentintooltip: "0",
    numberprefix: "$",
    enablemultislicing: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Jabatan 4",
      value: "300"
    },
    {
      label: "Jabatan 3",
      value: "230"
    },
    {
      label: "Jabatan 5",
      value: "180"
    },
    {
      label: "Jabatan 1",
      value: "270"
    },
    {
      label: "Jabatan 2",
      value: "200"
    }
  ]
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  width = '100%';
  height = '100%';
  typeChartOne = "bar3d";
  dataFormat = "json";
  dataSourceChartOne = dataChartOne;
  typeChartTwo = "bar2d"
  dataSourceChartTwo = dataChartTwo
  typeChartThree = "pie3d"
  dataSourceChartThree = dataChartThree


  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  optionsCloud: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 1,
    height: 350,
    overflow: false,
  };

  dataCloud: CloudData[] = [
    { text: 'Tandas', weight: 8, link: '#', color: '#ffaaee' },
    { text: 'Jalan', weight: 60, link: '#', color: '#e91e63' },
    { text: 'Bangku', weight: 10, link: '#', color: '#f44336' },
    { text: 'Pantai', weight: 25, link: '#', color: '#9c27b0' },
    { text: 'Bas', weight: 35, link: '#', color: '#2196f3' },
    { text: 'Rokok', weight: 45, link: '#', color: '#3f51b5' },
    { text: 'Rumput', weight: 25, link: '#', color: '#4527a0' },
    { text: 'Perhentian Bas', weight: 15, link: '#', color: '#004d40' },
    { text: 'Tong Sampah', weight: 35, link: '#', color: '#4caf50' },
    { text: 'Taman', weight: 45, link: '#', color: '#558b2f' },
    { text: 'Tiang Elektrik', weight: 25, link: '#', color: '#ffab00' }
  ];

  constructor(
    public zone: NgZone
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(
      () => {
        this.initChart()
        this.initChart1()
        this.initChart2()
      }
    )
  }

  public updateOptions() {

  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart3D);

    // Add data
    chart.data = [{
      "category": 'Kategori 1',
      "number": 235,
      "color": chart.colors.next()
    }, {
      "category": 'Kategori 2',
      "number": 262,
      "color": chart.colors.next()
    }, {
      "category": 'Kategori 3',
      "number": 301,
      "color": chart.colors.next()
    }, {
      "category": 'Kategori 4',
      "number": 295,
      "color": chart.colors.next()
    }, {
      "category": 'Kategori 5',
      "number": 112,
      "color": chart.colors.next()
    }, {
      "category": 'Kategori 6',
      "number": 126,
      "color": chart.colors.next()
    }, {
      "category": 'Kategori 7',
      "number": 96,
      "color": chart.colors.next()
    }, {
      "category": 'Kategori 8',
      "number": 136,
      "color": chart.colors.next()
    }, {
      "category": 'Kategori 9',
      "number": 76,
      "color": chart.colors.next()
    }, {
      "category": 'Kategori 10',
      "number": 50,
      "color": chart.colors.next()
    }]

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.inversed = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueX = "number";
    series.dataFields.categoryY = "category";
    series.name = "Jumlah";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{valueX}";
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.2;
  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.XYChart);

    chart.data = [{
      "country": "Jabatan 1",
      "visits": 2025
    }, {
      "country": "Jabatan 2",
      "visits": 1882
    }, {
      "country": "Jabatan 3",
      "visits": 1809
    }, {
      "country": "Jabatan 4",
      "visits": 1322
    }, {
      "country": "Jabatan 5",
      "visits": 1122
    }];

    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
      am4core.array.each(chart.data, function (item) {
        item.visits += Math.round(Math.random() * 200 - 100);
        item.visits = Math.abs(item.visits);
      })
      chart.invalidateRawData();
    }, 2000)

    categoryAxis.sortBySeries = series;
  }

  initChart2() {
    let chart = am4core.create("chartdiv2", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    // chart.legend = new am4charts.Legend();

    chart.data = [
      {
        department: "Jabatan 1",
        amount: 501
      },
      {
        department: "Jabatan 2",
        amount: 301
      },
      {
        department: "Jabatan 3",
        amount: 201
      },
      {
        department: "Jabatan 4",
        amount: 165
      },
      {
        department: "Jabatan 5",
        amount: 139
      }
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.radius = 70
    series.dataFields.value = "amount";
    series.dataFields.category = "department";

  }

}
