export interface Animal {
  category: string,
  name: string,
  breed: string,
  size: string,
  height: number,
  gender: string,
  age: number,
  weight: number,
  vaccination: boolean,
  sterilization: boolean,
}

const translateTable = {
  breed: 'Порода',
  height: 'Рост',
  gender: 'Пол',
  age: 'Возраст (лет)',
  weight: 'Вес (кг)',
  vaccination: 'Вакцинация',
  sterilization: 'Стерилизация',
};

export function getAnimalParams(animal: Animal): ({ name: string, value: any })[] {
  return Object.entries(animal)
    .map(([key, value]) => {
      if (typeof value === 'boolean') value = value ? 'Да' : 'Нет';
      return translateTable[key]
        ? { name: translateTable[key], value }
        : null;
    })
    .filter((i) => !!i);
}
