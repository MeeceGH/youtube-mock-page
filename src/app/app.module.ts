import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import { VideoDisplayComponent } from './video-display/video-display.component';
import { VideoDisplayDetailsComponent } from './video-display/video-display-details/video-display-details.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { VideoRecComponent } from './aside-bar/video-rec/video-rec.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VideoDisplayComponent,
    VideoDisplayDetailsComponent,
    AsideBarComponent,
    VideoRecComponent,
    CommentSectionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
