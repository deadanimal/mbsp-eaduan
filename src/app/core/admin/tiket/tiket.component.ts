import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const createData = [{
  "id": "ADN64841",
  "pengadu": "Ganny Corck",
  "kategori": "Close",
  "keterangan": "Keterangan 1",
  "lokasi": "Lokasi 4",
  "jabatan": "Jabatan 3",
  "pic": "Alaine Temprell",
  "status": "Selesai"
}, {
  "id": "ADN09793",
  "pengadu": "Marcellina Radden",
  "kategori": "Open",
  "keterangan": "Keterangan 3",
  "lokasi": "Lokasi 2",
  "jabatan": "Jabatan 4",
  "pic": "Helenka Stollman",
  "status": "Selesai"
}, {
  "id": "ADN79443",
  "pengadu": "Berk Kinde",
  "kategori": "Close",
  "keterangan": "Keterangan 2",
  "lokasi": "Lokasi 5",
  "jabatan": "Jabatan 5",
  "pic": "Elana Hallas",
  "status": "Selesai"
}, {
  "id": "ADN92732",
  "pengadu": "Amory Sprey",
  "kategori": "Open",
  "keterangan": "Keterangan 4",
  "lokasi": "Lokasi 3",
  "jabatan": "Jabatan 4",
  "pic": "Godart Broadstock",
  "status": "Dalam tindakan"
}, {
  "id": "ADN85497",
  "pengadu": "Tamara Gerring",
  "kategori": "Open",
  "keterangan": "Keterangan 2",
  "lokasi": "Lokasi 5",
  "jabatan": "Jabatan 3",
  "pic": "Kayley Eake",
  "status": "Dalam tindakan"
}, {
  "id": "ADN37387",
  "pengadu": "Darby Haggerty",
  "kategori": "Close",
  "keterangan": "Keterangan 3",
  "lokasi": "Lokasi 3",
  "jabatan": "Jabatan 2",
  "pic": "Guillaume Knaggs",
  "status": "Selesai"
}, {
  "id": "ADN30461",
  "pengadu": "Glory Holbie",
  "kategori": "Open",
  "keterangan": "Keterangan 3",
  "lokasi": "Lokasi 3",
  "jabatan": "Jabatan 3",
  "pic": "Yanaton Atcheson",
  "status": "Dalam tindakan"
}, {
  "id": "ADN59760",
  "pengadu": "Hercules Milburn",
  "kategori": "Close",
  "keterangan": "Keterangan 2",
  "lokasi": "Lokasi 5",
  "jabatan": "Jabatan 2",
  "pic": "Christabella Harbor",
  "status": "Dalam tindakan"
}, {
  "id": "ADN73869",
  "pengadu": "Ashlan Dimont",
  "kategori": "Open",
  "keterangan": "Keterangan 4",
  "lokasi": "Lokasi 1",
  "jabatan": "Jabatan 4",
  "pic": "Harold Bortoletti",
  "status": "Dalam tindakan"
}, {
  "id": "ADN98939",
  "pengadu": "Neilla Server",
  "kategori": "Open",
  "keterangan": "Keterangan 5",
  "lokasi": "Lokasi 1",
  "jabatan": "Jabatan 1",
  "pic": "Andrus O'Ferris",
  "status": "Dalam tindakan"
}]

@Component({
  selector: 'app-tiket',
  templateUrl: './tiket.component.html',
  styleUrls: ['./tiket.component.scss']
})
export class TiketComponent implements OnInit {
  public aduans = createData
  
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
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Jan",
        visits: 23725
      },
      {
        country: "Feb",
        visits: 1882
      },
      {
        country: "Mac",
        visits: 1809
      },
      {
        country: "Apr",
        visits: 1322
      },
      {
        country: "Mei",
        visits: 1122
      },
      {
        country: "Jun",
        visits: 1114
      },
      {
        country: "Jul",
        visits: 984
      },
      {
        country: "Ogo",
        visits: 711
      },
      {
        country: "Sep",
        visits: 665
      },
      {
        country: "Okt",
        visits: 580
      },
      {
        country: "Nov",
        visits: 443
      },
      {
        country: "Dis",
        visits: 441
      }
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 24000;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 30;
    // axis break
    let axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 2100;
    axisBreak.endValue = 22900;
    //axisBreak.breakSize = 0.005;

    // fixed axis break
    let d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
    axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

    // make break expand on hover
    let hoverState = axisBreak.states.create("hover");
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;

    axisBreak.defaultState.transitionDuration = 1000;
    /*
    // this is exactly the same, but with events
    axisBreak.events.on("over", function() {
      axisBreak.animate(
        [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
        1500,
        am4core.ease.sinOut
      );
    });
    axisBreak.events.on("out", function() {
      axisBreak.animate(
        [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
        1000,
        am4core.ease.quadOut
      );
    });*/

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
  }

}
