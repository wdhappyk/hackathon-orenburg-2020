import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

interface HistoryItem {
  name: string;
  date: Date;
}

@Component({
  selector: 'app-shelter-animal-detail-page',
  templateUrl: './shelter-animal-detail-page.component.html',
  styleUrls: ['./shelter-animal-detail-page.component.scss']
})
export class ShelterAnimalDetailPageComponent implements OnInit {
  contractors = ['ИП "Собакофф"', 'ИП "Котофф"', 'ИП "Крокодилофф"', 'ИП "Копытофф"'];
  detailForm = this.fb.group({
    name: this.fb.control('Бруно', Validators.required),
    category: this.fb.control('dogs', Validators.required),
    gender: this.fb.control('Кобель', Validators.required),
    birthday: this.fb.control(new Date(2016, 5, 12), Validators.required),
    color: this.fb.control('Серо-полосатый', Validators.required),
    virtualOwner: this.fb.control(''),
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
    'Серо-полосатый',
    'Черный',
    'Белый',
    'Серый',
    'Черно-белый',
  ];

  contractorsList = ['ИП "Собакофф"', 'ИП "Котофф"', 'ИП "Крокодилофф"', 'ИП "Копытофф"'];

  cardHistory: HistoryItem[] = [
    {
      name: 'Поступление',
      date: new Date(2020, 5, 14),
    },
    {
      name: 'Маркировка',
      date: new Date(2020, 5, 14),
    },
    {
      name: 'Прививка',
      date: new Date(2020, 5, 14),
    },
    {
      name: 'Возврат',
      date: new Date(2020, 5, 14),
    },
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
  }


}
