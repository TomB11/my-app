import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  imagePath = './assets/img/logo.jpg'
  arrayOfList = [
    {
      name: 'home',
      link: 'home'
    },
    {
      name: 'about me',
      link: 'aboutme'
    },
    {
      name: 'cv',
      link: 'cv'
    },
    {
      name: 'contact',
      link: 'contact'
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
