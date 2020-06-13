import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Animal, getAnimalParams } from '../animal';

interface CategoryInfo {
  categoryName: string,
  genderList: string[],
  breeds: string[],
}

@Component({
  selector: 'app-animal-search-page',
  templateUrl: './animal-search-page.component.html',
  styleUrls: ['./animal-search-page.component.scss'],
})
export class AnimalSearchPageComponent implements OnInit {
  loading = true;

  categoryName = 'Собаки';
  filterFormGroup = this.fb.group({
    gender: this.fb.control([]),
    size: this.fb.control([]),
    breed: this.fb.control([]),
  });

  category;

  get categoryInfo(): CategoryInfo {
    return this.categories[this.category];
  }

  sizes = [
    'маленькое',
    'среднее',
    'большое',
  ];

  categories: { [category: string]: CategoryInfo } = {
    'dogs': {
      categoryName: 'Собаки',
      genderList: ['Кобель', 'Сучка'],
      breeds: [
        'Пудель',
        'Бигль',
        'Грейхаунд',
        'Ши-тцу',
        'Английский будьдог',
        'Бишон фризе',
      ],
    },
    'cats': {
      categoryName: 'Кошки',
      genderList: ['Кот', 'Кошка'],
      breeds: [
        'Персидская кошка',
        'Бенгальская кошка',
        'Сиамская кошка',
        'Сфинкс',
        'Рэгдолл',
        'Манчкин',
      ],
    },
  };

  categoryTranslateTable = {
    'dogs': 'dogs',
    'puppies': 'dogs',
    'cats': 'cats',
  };

  animals: Animal[] = [
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Бруно',
      breed: 'Алабай',
      size: 'маленькое',
      height: 50,
      gender: 'Кобель',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
  ];

  get filteredAnimals() {
    const categoryInfo = this.categoryInfo;
    return this.animals.filter((animal) => {
      if (animal.category !== this.category) {
        return false;
      }
      const genderInputValue = this.filterFormGroup.controls.gender.value;
      const genders = genderInputValue.length ? genderInputValue : categoryInfo.genderList;
      if (!genders.includes(animal.gender)) return false;
      return true;
    });
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = this.categoryTranslateTable[params.category];
      this.loading = false;
    });
  }

  getAnimalParams(animal: Animal) {
    return getAnimalParams(animal);
  }
}
