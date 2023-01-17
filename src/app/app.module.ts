import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPgeComponent } from './components/first-pge/first-pge.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { DrodownDirective } from './directive/drodown.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { StoryBlockComponent } from './components/utils/story-block/story-block.component';
import { StoryProjectsComponent } from './components/utils/story-projects/story-projects.component';

const appRoutes: Routes = [
  {path: 'home', component: FirstPgeComponent},
  {path: 'aboutme', component: SecondPageComponent},
  {path: 'cv', component: ThirdPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]
 
@NgModule({
  declarations: [
    AppComponent,
    FirstPgeComponent,
    SecondPageComponent,
    ThirdPageComponent,
    NavigationComponent,
    BetterHighlightDirective,
    DrodownDirective,
    HighlightDirective,
    StoryBlockComponent,
    StoryProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
