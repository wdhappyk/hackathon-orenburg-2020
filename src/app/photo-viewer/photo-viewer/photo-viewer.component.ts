import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {

  selected: string;
  photoList = [];

  @Input()
  set photos(photos: string[]) {
    this.photoList = photos;
    this.selected = photos[0];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
