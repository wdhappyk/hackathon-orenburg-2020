import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewShelterDialogComponent } from './new-shelter-dialog/new-shelter-dialog.component';

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
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }

  openNewShelterDialog() {
    this.dialog.open(NewShelterDialogComponent).afterClosed().subscribe((result) => {
      if (!result) return;
      this.shelters.push({
        name: result.name,
        address: result.address,
      });
    })
  }
}
