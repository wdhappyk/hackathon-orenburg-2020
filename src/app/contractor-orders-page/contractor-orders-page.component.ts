import { Component, OnInit } from '@angular/core';
import { CardStatus } from '../card-status';
import { FormControl } from '@angular/forms';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';

interface Order {
  status: CardStatus,
  createDate: Date,
  address: string,
}

@Component({
  selector: 'app-contractor-orders-page',
  templateUrl: './contractor-orders-page.component.html',
  styleUrls: ['./contractor-orders-page.component.scss']
})
export class ContractorOrdersPageComponent implements OnInit {

  orders: Order[] = [
    {
      status: CardStatus.Process,
      createDate: new Date(2020, 5, 14),
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Complete,
      createDate: new Date(2020, 5, 14),
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Complete,
      createDate: new Date(2020, 5, 14),
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Complete,
      createDate: new Date(2020, 5, 14),
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Process,
      createDate: new Date(2020, 5, 14),
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Process,
      createDate: new Date(2020, 5, 14),
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
  ];
  statisticYear = 2020;
  statusFormControl = new FormControl('all');


  get filteredOrders() {
    const status = this.statusFormControl.value;
    return this.orders.filter((order) => {
      return (status === 'all' || status !== 'all' && order.status === status);
    });
  }

  constructor(
    private confirmDialog: ConfirmDialogService,
  ) {
  }

  ngOnInit(): void {
  }

  removeOrder(order: Order) {
    this.confirmDialog.open('Вы уверены?', 'Вы действительно хотите удалить заказ?').subscribe((value => {
      if (!value) return;
      const idx = this.orders.indexOf(order);
      this.orders.splice(idx, 1);
    }));
  }

}
