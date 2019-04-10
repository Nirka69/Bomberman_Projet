import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map = 
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,0],
    [0,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0],
    [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
    [0,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,1,0],
    [0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
  constructor() { }

  ngOnInit() {
  }

}
