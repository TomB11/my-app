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
  selectedType = '';
  selectedlistOfKnowledges: Array<{}> = [];

  constructor() {}

  ngOnInit(): void {
    for (let category of this.data.thirdPageContent.categories) {
      this.activeIndex.push({ id: category.id, active: false });
    }
  }

  categoryClicked(category: any) {
    this.detailTitle = category.title;

    this.activeIndex.find((index) => {
      if (index.id === category.id) {
        index.active = !index.active;
        this.selectedType = category.type;
        this.selectedlistOfKnowledges = category.list;
      } else {
        index.active = false;
      }
    });
  }
}
