import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

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
    {text: 'Tandas', weight: 8, link: '#', color: '#ffaaee'},
    {text: 'Jalan', weight: 60, link: '#', color: '#e91e63'},
    {text: 'Bangku', weight: 10, link: '#', color: '#f44336'},
    {text: 'Pantai', weight: 25, link: '#', color: '#9c27b0'},
    {text: 'Bas', weight: 35, link: '#', color: '#2196f3'},
    {text: 'Rokok', weight: 45, link: '#', color: '#3f51b5'},
    {text: 'Rumput', weight: 25, link: '#', color: '#4527a0'},
    {text: 'Perhentian Bas', weight: 15, link: '#', color: '#004d40'},
    {text: 'Tong Sampah', weight: 35, link: '#', color: '#4caf50'},
    {text: 'Taman', weight: 45, link: '#', color: '#558b2f'},
    {text: 'Tiang Elektrik', weight: 25, link: '#', color: '#ffab00'}
  ];

  constructor() { }

  ngOnInit() {
  }

  public updateOptions() {

  }

}
