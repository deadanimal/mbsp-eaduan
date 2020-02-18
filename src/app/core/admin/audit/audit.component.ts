import { Component, OnInit } from '@angular/core';
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
  
  constructor() { }

  ngOnInit() {
  }

}
