import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


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
      }
    )
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.ChordDiagram);


    chart.data = [
      { from: "A", to: "D", value: 10 },
      { from: "B", to: "D", value: 8 },
      { from: "B", to: "E", value: 4 },
      { from: "B", to: "C", value: 2 },
      { from: "C", to: "E", value: 14 },
      { from: "E", to: "D", value: 8 },
      { from: "C", to: "A", value: 4 },
      { from: "G", to: "A", value: 7 },
      { from: "D", to: "B", value: 1 }
    ];

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    // make nodes draggable
    let nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;

    let nodeLink = chart.links.template;
    let bullet = nodeLink.bullets.push(new am4charts.CircleBullet());
    bullet.fillOpacity = 1;
    bullet.circle.radius = 5;
    bullet.locationX = 0.5;

    // create animations
    chart.events.on("ready", function () {
      for (var i = 0; i < chart.links.length; i++) {
        let link = chart.links.getIndex(i);
        let bullet = link.bullets.getIndex(0);

        animateBullet(bullet);
      }
    })

    function animateBullet(bullet) {
      let duration = 3000 * Math.random() + 2000;
      let animation = bullet.animate([{ property: "locationX", from: 0, to: 1 }], duration)
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      })
    }

  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.ChordDiagram);
    chart.hiddenState.properties.opacity = 0;

    let data = [];
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function randomLetter(except) {
        let letter = letters[Math.floor(Math.random() * letters.length - 1)];
        if (letter == except) {
            return randomLetter(except);
        }
        else {
            return letter;
        }
    }

    for (var i = 0; i < letters.length; i++) {
        let fromLetter = letters[i];
        for (var o = 0; o < 3; o++) {
            data.push({ from: fromLetter, to: randomLetter(fromLetter), value: Math.round(Math.random() * 100) });
        }
    }

    chart.data = data;

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
    chart.nonRibbon = true;
    chart.sortBy = "name";
    chart.startAngle = 90;
    chart.endAngle = 450;

    let nodeTemplate = chart.nodes.template;
    nodeTemplate.fill = chart.colors.getIndex(0);
    nodeTemplate.fillOpacity = 0.4;
    nodeTemplate.slice.disabled = true;
    nodeTemplate.setStateOnChildren = true;
    nodeTemplate.label.disabled = true;
    nodeTemplate.togglable = false;

    nodeTemplate.readerTitle = "Drag to rearrange";
    nodeTemplate.showSystemTooltip = true;

    let hoverState = nodeTemplate.states.create("hover");
    hoverState.properties.fillOpacity = 1;

    let linkTemplate = chart.links.template;
    linkTemplate.opacity = 0.1;
    linkTemplate.stroke = chart.colors.getIndex(0);
    linkTemplate.defaultState.properties.opacity = 0.1;
    linkTemplate.tooltipText = "";

    let linkHoverState = linkTemplate.states.create("hover");
    linkHoverState.properties.opacity = 1;

    nodeTemplate.events.on("over", function (event) {
        let node = event.target;
        node.outgoingDataItems.each(function (dataItem) {
            dataItem.link.isHover = true;
        })
    })

    nodeTemplate.events.on("out", function (event) {
        let node = event.target;
        node.outgoingDataItems.each(function (dataItem) {
            dataItem.link.isHover = false;
        })
    })

    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.grab;

    nodeTemplate.cursorDownStyle = am4core.MouseCursorStyle.grabbing;

    let circleBullet = nodeTemplate.createChild(am4charts.CircleBullet);
    circleBullet.setStateOnChildren = true;
    circleBullet.circle.radius = 15;

    let circleHoverState = circleBullet.states.create("hover");
    circleHoverState.properties.scale = 1.5;

    // we create a separate label as node.label ispositioned differently and doesn't fit perfectly for one-letter labels
    let label = circleBullet.createChild(am4core.Label);
    label.text = "{fromName}";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";

    let labelHoverState = label.states.create("hover");
    labelHoverState.properties.fill = am4core.color("#ffffff");
  }

}
