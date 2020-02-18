import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

}
