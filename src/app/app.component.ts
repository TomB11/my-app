import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

}
