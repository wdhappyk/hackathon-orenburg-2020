import { Component, OnInit } from '@angular/core';

interface Shelter {
  name: string;
  address: string;
}

@Component({
  selector: 'app-shelters-page',
  templateUrl: './shelters-page.component.html',
  styleUrls: ['./shelters-page.component.scss']
})
export class SheltersPageComponent implements OnInit {

  shelters: Shelter[] = [
    {
      name: 'ИП "Братья меньшие"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
     name: 'ИП "Братья меньшие"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
     name: 'ИП "Братья меньшие"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      name: 'ИП "Братья меньшие"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      name: 'ИП "Братья меньшие"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      name: 'ИП "Братья меньшие"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
  ];

  statisticYear = 2020;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
