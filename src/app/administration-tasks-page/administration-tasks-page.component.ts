import { Component, OnInit } from '@angular/core';
import { CardStatus } from '../card-status';
import { FormControl } from '@angular/forms';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';

interface Task {
  status: CardStatus,
  createDate: Date,
  contractor: string,
  address: string,
}

@Component({
  selector: 'app-administration-tasks-page',
  templateUrl: './administration-tasks-page.component.html',
  styleUrls: ['./administration-tasks-page.component.scss'],
})
export class AdministrationTasksPageComponent implements OnInit {
  tasks: Task[] = [
    {
      status: CardStatus.Process,
      createDate: new Date(2020, 5, 14),
      contractor: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Complete,
      createDate: new Date(2020, 5, 14),
      contractor: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Fail,
      createDate: new Date(2020, 5, 14),
      contractor: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.ReadyConfirm,
      createDate: new Date(2020, 5, 14),
      contractor: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Process,
      createDate: new Date(2020, 5, 14),
      contractor: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Process,
      createDate: new Date(2020, 5, 14),
      contractor: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
  ];
  contractorsFormControl = new FormControl([]);
  contractorsList = ['ИП "Собакофф"', 'ИП "Котофф"', 'ИП "Крокодилофф"', 'ИП "Копытофф"'];
  statisticYear = 2020;
  statusFormControl = new FormControl('all');


  get filteredTasks() {
    const status = this.statusFormControl.value;
    const contractors = this.contractorsFormControl.value?.length ? this.contractorsFormControl.value : this.contractorsList;

    return this.tasks.filter((task) => {
      return (status === 'all' || status !== 'all' && task.status === status)
        && contractors.includes(task.contractor);
    });
  }

  constructor(
    private confirmDialog: ConfirmDialogService,
  ) {
  }

  ngOnInit(): void {
  }

  removeTask(task: Task) {
    this.confirmDialog.open('Вы уверены?', 'Вы действительно хотите удалить данную задачу?').subscribe((value => {
      if (!value) return;
      const idx = this.tasks.indexOf(task);
      this.tasks.splice(idx, 1);
    }));
  }
}
