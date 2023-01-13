import { Component, OnInit } from '@angular/core';
import { translate } from 'src/assets/data/translate';

@Component({
  selector: 'app-first-pge',
  templateUrl: './first-pge.component.html',
  styleUrls: ['./first-pge.component.scss'],
})
export class FirstPgeComponent implements OnInit {
  public trans = translate;

  constructor() {}

  ngOnInit(): void {}
}
