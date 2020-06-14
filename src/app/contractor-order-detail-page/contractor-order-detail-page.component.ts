import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-contractor-order-detail-page',
  templateUrl: './contractor-order-detail-page.component.html',
  styleUrls: ['./contractor-order-detail-page.component.scss'],
})
export class ContractorOrderDetailPageComponent implements OnInit {
  contractors = ['ИП "Собакофф"', 'ИП "Котофф"', 'ИП "Крокодилофф"', 'ИП "Копытофф"'];
  detailForm = this.fb.group({
    category: this.fb.control('dogs', Validators.required),
    gender: this.fb.control('Кобель', Validators.required),
    color: this.fb.control('', Validators.required),
    regPlate: this.fb.control('Нет', Validators.required),
    behaviorBeforeTrapping: this.fb.control('Агрессивное', Validators.required),
    captureDate: this.fb.control(new Date(), Validators.required),
    captureTime: this.fb.control('', Validators.required),
    signs: this.fb.control(''),
    captureLocation: this.fb.control('', Validators.required),
    contractor: this.fb.control('', Validators.required),
  });

  category;

  categories = [
    {
      category: 'dogs',
      name: 'Собака',
      genderList: ['Кобель', 'Сучка'],
    },
    {
      category: 'cats',
      name: 'Кошка',
      genderList: ['Кот', 'Кошка'],
    },
  ];

  colors = [
    'Черный',
    'Белый',
    'Серый',
    'Черно-белый',
  ];

  regPlates = [
    'Нет',
    'Бирка',
    'Ошейник',
    'Клеймо',
  ];

  behaviorVariants = [
    'Агрессивное',
    'Спокойнойе',
    'Нервное',
  ];


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.category = this.categories[0];
    this.detailForm.controls.category.valueChanges.subscribe((category) => {
      this.category = this.categories.find((c) => c.category === category);
      this.detailForm.controls.gender.setValue(this.category.genderList[0]);
    });
    this.detailForm.controls.contractor.setValue(this.auth.user.fullName);
  }


}
