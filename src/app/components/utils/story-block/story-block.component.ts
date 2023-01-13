import { Component, Input, OnInit } from '@angular/core';
import { StoryDetail } from 'src/app/model/story-detail.story-detail.model.ts';

@Component({
  selector: 'app-story-block',
  templateUrl: './story-block.component.html',
  styleUrls: ['./story-block.component.scss'],
})
export class StoryBlockComponent implements OnInit {
  @Input()
  year!: any[];

  constructor() {}

  ngOnInit(): void {}
}
