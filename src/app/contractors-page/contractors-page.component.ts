import { Component, OnInit } from '@angular/core';

interface Contractor {
  name: string;
  address: string;
}

@Component({
  selector: 'app-contractors-page',
  templateUrl: './contractors-page.component.html',
  styleUrls: ['./contractors-page.component.scss']
})
export class ContractorsPageComponent implements OnInit {

  contractors: Contractor[] = [
    {
      name: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
     name: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
     name: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      name: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      name: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      name: 'ИП "Собакофф"',
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
