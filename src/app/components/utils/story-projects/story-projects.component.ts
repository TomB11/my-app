import { Component, OnInit, Input } from '@angular/core';
import { StoryDetail } from 'src/app/model/story-detail.story-detail.model.ts';

@Component({
  selector: 'app-story-projects',
  templateUrl: './story-projects.component.html',
  styleUrls: ['./story-projects.component.scss'],
})
export class StoryProjectsComponent implements OnInit {
  @Input()
  dataPrjts: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
