import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contractor-order-detail-page',
  templateUrl: './contractor-order-detail-page.component.html',
  styleUrls: ['./contractor-order-detail-page.component.scss']
})
export class ContractorOrderDetailPageComponent implements OnInit {

  contractors = ['ИП "Собакофф"', 'ИП "Котофф"', 'ИП "Крокодилофф"', 'ИП "Копытофф"'];
  dataForm = this.fb.group({
    contractor: this.fb.control('', Validators.required),
    address: this.fb.control('', Validators.required),
    date: this.fb.control('', Validators.required),
    time: this.fb.control('', Validators.required),
    status: this.fb.control('В процессе', Validators.required),
  });
  timeList = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ];
  statuses = ['В процессе', 'Выполнена', 'Ожидает подтверждения', 'Просрочена'];

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }
}
