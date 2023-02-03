import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss'],
})
export class SkillDetailComponent implements OnInit {
  @Input() typeOfSkill!: string;
  @Input() listOfKnowledes!: Array<any>;

  constructor() {}

  ngOnInit(): void {}
}
