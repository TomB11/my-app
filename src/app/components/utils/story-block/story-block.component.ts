import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-block',
  templateUrl: './story-block.component.html',
  styleUrls: ['./story-block.component.scss'],
})
export class StoryBlockComponent implements OnInit {
  @Input()
  story!: any;
  @Input() projects!: any[];

  constructor() {}

  ngOnInit(): void {}

  openDetail() {}
}
