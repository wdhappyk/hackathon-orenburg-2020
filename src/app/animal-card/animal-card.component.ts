import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent implements OnInit {

  @Input() small = true;
  @Input() params;
  @Input() image;
  @Input() name = '';

  constructor() { }

  ngOnInit(): void {
  }

}
