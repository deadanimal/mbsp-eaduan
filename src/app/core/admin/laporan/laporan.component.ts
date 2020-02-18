import { Component, OnInit } from '@angular/core';


const dataChartOne = {
  chart: {
    yaxisname: "Purata",
    decimals: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Januari",
      value: "5"
    },
    {
      label: "Februari",
      value: "4"
    },
    {
      label: "Mac",
      value: "5"
    },
    {
      label: "April",
      value: "4.5"
    },
    {
      label: "May",
      value: "4"
    },
    {
      label: "Jun",
      value: "2"
    },
    {
      label: "Julai",
      value: "5"
    },
    {
      label: "Ogos",
      value: "5"
    },
    {
      label: "September",
      value: "5"
    },
    {
      label: "Oktober",
      value: "4.5"
    }
  ]
};

const dataChartTwo = {
  chart: {
    xaxisname: "Jabatan",
    yaxisname: "Purata",
    theme: "fusion",
    palettecolors: "ff8a5c"
  },
  data: [
    {
      label: "Jabatan 1",
      value: "5"
    },
    {
      label: "Jabatan 2",
      value: "5"
    },
    {
      label: "Jabatan 3",
      value: "4"
    },
    {
      label: "Jabatan 4",
      value: "4"
    },
    {
      label: "Jabatan 5",
      value: "5"
    },
    {
      label: "Jabatan 6",
      value: "1"
    },
    {
      label: "Jabatan 7",
      value: "3"
    },
    {
      label: "Jabatan 8",
      value: "3"
    }
  ]
};

const dataChartThree = {
  chart: {
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "1 Hari",
      value: "32647479"
    },
    {
      label: "2 Hari",
      value: "22100932"
    },
    {
      label: "3 Hari",
      value: "14376"
    },
    {
      label: "4 Hari",
      value: "18674221"
    }
  ]
};


const dataChartFour = {
  chart: {
    showvalues: "1",
    showpercentintooltip: "0",
    enablemultislicing: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Open",
      value: "300000"
    },
    {
      label: "Close",
      value: "230000"
    }
  ]
};

const dataChartFive = {
  chart: {
    xaxisname: "Bulan",
    formatnumberscale: "1",
    theme: "fusion",
    drawcrossline: "1"
  },
  categories: [
    {
      category: [
        {
          label: "Januari"
        },
        {
          label: "Februari"
        },
        {
          label: "Mac"
        },
        {
          label: "April"
        },
        {
          label: "May"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "2019",
      data: [
        {
          value: "1250"
        },
        {
          value: "3000"
        },
        {
          value: "4800"
        },
        {
          value: "8000"
        },
        {
          value: "11000"
        }
      ]
    },
    {
      seriesname: "2018",
      data: [
        {
          value: "700"
        },
        {
          value: "1500"
        },
        {
          value: "3500"
        },
        {
          value: "6000"
        },
        {
          value: "14000"
        }
      ]
    },
    {
      seriesname: "2017",
      data: [
        {
          value: "1000"
        },
        {
          value: "1000"
        },
        {
          value: "3000"
        },
        {
          value: "6000"
        },
        {
          value: "9000"
        }
      ]
    }
  ]
};


const dataChartSix = {
  chart: {
    xaxisname: "Bulan",
    yaxisname: "Purata",
    exportenabled: "1",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "Januari"
        },
        {
          label: "Februari"
        },
        {
          label: "Mac"
        },
        {
          label: "April"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Kepuasan Pengguna",
      data: [
        {
          value: "5"
        },
        {
          value: "4"
        },
        {
          value: "5"
        },
        {
          value: "4.5"
        }
      ]
    },
    {
      seriesname: "Prestasi Jabatan",
      renderas: "line",
      data: [
        {
          value: "4"
        },
        {
          value: "4"
        },
        {
          value: "4"
        },
        {
          value: "3"
        }
      ]
    },
    {
      seriesname: "Aduan Selesai",
      renderas: "area",
      showanchors: "0",
      data: [
        {
          value: "3"
        },
        {
          value: "2"
        },
        {
          value: "3"
        },
        {
          value: "2"
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.component.html',
  styleUrls: ['./laporan.component.scss']
})
export class LaporanComponent implements OnInit {

  width = '100%';
  height = '100%';
  typeChartOne = "column3d";
  dataFormat = "json";
  dataSourceChartOne = dataChartOne;
  typeChartTwo = "column2d"
  dataSourceChartTwo = dataChartTwo;
  typeChartThree = "pie2d"
  dataSourceChartThree = dataChartThree
  typeChartFour = "pie3d"
  dataSourceChartFour = dataChartFour
  typeChartFive = "mscolumn2d"
  dataSourceChartFive = dataChartFive
  typeChartSix = "mscombi2d"
  dataSourceChartSix = dataChartSix
  constructor() { }

  ngOnInit() {
  }

}
