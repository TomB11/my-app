import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-knowledge-meter',
  templateUrl: './knowledge-meter.component.html',
  styleUrls: ['./knowledge-meter.component.scss'],
})
export class KnowledgeMeterComponent implements OnInit {
  @Input() knowledgeData: any;
  @Input() selectedType!: string;

  constructor() {}

  ngOnInit(): void {}
}
