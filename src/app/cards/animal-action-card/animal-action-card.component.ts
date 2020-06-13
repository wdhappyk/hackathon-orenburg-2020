import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-action-card',
  templateUrl: './animal-action-card.component.html',
  styleUrls: ['./animal-action-card.component.scss']
})
export class AnimalActionCardComponent implements OnInit {
  @Input() animalCategory: string;
  @Input() iconColor = '#8080f6';

  constructor() { }

  ngOnInit(): void {
  }

}
