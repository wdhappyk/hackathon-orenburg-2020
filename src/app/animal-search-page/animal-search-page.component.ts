import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class AnimalSearchPageComponent implements OnInit, AfterViewInit {
  loading = true;

  filterFormGroup = this.fb.group({
    gender: this.fb.control([]),
    size: this.fb.control([]),
    breed: this.fb.control([]),
    category: this.fb.control('dogs'),
  });

  get category() {
    return this.filterFormGroup.controls.category.value;
  }

  set category(value) {
    this.filterFormGroup.controls.category.setValue(value);
  }

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
        'Алабай',
        'Такса',
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
  categoryList = ['dogs', 'cats'];

  animals: Animal[] = [
    {
      category: 'dogs',
      name: 'Чапа',
      breed: 'Такса',
      size: 'маленькое',
      height: 50,
      gender: 'Сучка',
      age: 3.5,
      weight: 5,
      vaccination: true,
      sterilization: false,
    },
    {
      category: 'dogs',
      name: 'Арчи',
      breed: 'Пудель',
      size: 'среднее',
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
      category: 'cats',
      name: 'Маркиз',
      breed: 'Манчкин',
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

    const genderInputValue = this.filterFormGroup.controls.gender.value;
    const genders = genderInputValue?.length ? genderInputValue : categoryInfo.genderList;

    const sizeInputValue = this.filterFormGroup.controls.size.value;
    const sizes = sizeInputValue?.length ? sizeInputValue : this.sizes;

    const breedInputValue = this.filterFormGroup.controls.breed.value;
    const breeds = breedInputValue?.length ? breedInputValue : categoryInfo.breeds;

    return this.animals.filter((animal) => {
      return animal.category === this.category
        && genders.includes(animal.gender)
        && sizes.includes(animal.size)
        && breeds.includes(animal.breed);
    });
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.loading = false;
  }

  getAnimalParams(animal: Animal) {
    return getAnimalParams(animal);
  }

  ngAfterViewInit(): void {
    this.filterFormGroup.controls.category.valueChanges.subscribe(() => {
      this.clearFilter();
    });
  }

  clearFilter() {
    this.filterFormGroup.controls.gender.reset([]);
    this.filterFormGroup.controls.size.reset([]);
    this.filterFormGroup.controls.breed.reset([]);
  }
}
