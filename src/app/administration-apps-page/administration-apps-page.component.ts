import { Component, OnInit } from '@angular/core';
import { CardStatus } from '../card-status';
import { FormControl } from '@angular/forms';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';

interface Application {
  status: CardStatus,
  createDate: Date,
  applicant: string,
  address: string,
}

@Component({
  selector: 'app-administration-apps-page',
  templateUrl: './administration-apps-page.component.html',
  styleUrls: ['./administration-apps-page.component.scss'],
})
export class AdministrationAppsPageComponent implements OnInit {
  applications: Application[] = [
    {
      status: CardStatus.Process,
      createDate: new Date(2020, 5, 14),
      applicant: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Complete,
      createDate: new Date(2020, 5, 14),
      applicant: 'Сидоров И.А.',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Complete,
      createDate: new Date(2020, 5, 14),
      applicant: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Complete,
      createDate: new Date(2020, 5, 14),
      applicant: 'Сидоров И.А.',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Process,
      createDate: new Date(2020, 5, 14),
      applicant: 'ИП "Собакофф"',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
    {
      status: CardStatus.Process,
      createDate: new Date(2020, 5, 14),
      applicant: 'Сидоров И.А.',
      address: 'г. Бугуруслан, ул. Московская, д. 12',
    },
  ];
  applicantsFormControl = new FormControl([]);
  applicantList = ['ИП "Собакофф"', 'Сидоров И.А.', 'ИП "Крокодилофф"', 'Федорова О.И.'];
  statisticYear = 2020;
  statusFormControl = new FormControl('all');


  get filteredApplications() {
    const status = this.statusFormControl.value;
    const applicants = this.applicantsFormControl.value?.length ? this.applicantsFormControl.value : this.applicantList;

    return this.applications.filter((app) => {
      return (status === 'all' || status !== 'all' && app.status === status)
        && applicants.includes(app.applicant);
    });
  }

  constructor(
    private confirmDialog: ConfirmDialogService,
  ) {
  }

  ngOnInit(): void {
  }

  removeApplication(app: Application) {
    this.confirmDialog.open('Вы уверены?', 'Вы действительно хотите удалить данную задачу?').subscribe((value => {
      if (!value) return;
      const idx = this.applications.indexOf(app);
      this.applications.splice(idx, 1);
    }));
  }

}
