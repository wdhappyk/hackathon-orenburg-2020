import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';

interface Animal {
  category: string;
  mark: string;
  name: string;
  virtualOwnerExists: boolean;
  date: Date;
}

@Component({
  selector: 'app-shelter-animals-page',
  templateUrl: './shelter-animals-page.component.html',
  styleUrls: ['./shelter-animals-page.component.scss'],
})
export class ShelterAnimalsPageComponent implements OnInit {


  get filteredAnimals(): Animal[] {
    const categories = this.categoryFormControl.value?.length ? this.categoryFormControl.value : ['dogs', 'cats'];
    return this.animals.filter((animal) => {
      return categories.includes(animal.category);
    });
  };

  animals: Animal[] = [
    {
      category: 'dogs',
      mark: '1231235',
      name: 'Артурик',
      virtualOwnerExists: false,
      date: new Date(2020, 4, 15),
    },
    {
      category: 'dogs',
      mark: '1231235',
      name: 'Артурик',
      virtualOwnerExists: false,
      date: new Date(2020, 4, 15),
    },
    {
      category: 'dogs',
      mark: '1231235',
      name: 'Артурик',
      virtualOwnerExists: false,
      date: new Date(2020, 4, 15),
    },
    {
      category: 'dogs',
      mark: '1231235',
      name: 'Артурик',
      virtualOwnerExists: false,
      date: new Date(2020, 4, 15),
    },
  ];
  categoryFormControl = new FormControl([]);

  constructor(
    private confirmDialog: ConfirmDialogService
  ) {
  }

  ngOnInit(): void {
  }

  removeAnimal(animal: any) {
    this.confirmDialog.open('Вы уверены?', 'Вы действительно хотите удалить животное?').subscribe((value => {
      if (!value) return;
      const idx = this.animals.indexOf(animal);
      this.animals.splice(idx, 1);
    }));
  }
}
