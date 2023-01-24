import { Component, OnInit } from '@angular/core';

import { translate } from 'src/assets/data/translate';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss'],
})
export class ThirdPageComponent implements OnInit {
  data = translate.sk;
  isActive = false;
  activeIndex: Array<{ id: string; active: boolean }> = [];
  detailTitle = this.data.thirdPageContent.detailTitle;

  constructor() {}

  ngOnInit(): void {
    for (let category of this.data.thirdPageContent.categories) {
      this.activeIndex.push({ id: category.id, active: false });
    }
  }

  categoryClicked(title: string, idButton: string) {
    this.detailTitle = title;

    this.activeIndex.find((category) => {
      if (category.id === idButton) {
        category.active = !category.active;
      } else {
        category.active = false;
      }
    });
  }
}
