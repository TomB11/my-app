import { Component, OnInit } from '@angular/core';
import { myStory } from 'src/assets/data/my-story';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent implements OnInit {
  public data = myStory;

  constructor() {}

  ngOnInit(): void {
    console.log('data', this.data.sk.years);
  }
}
