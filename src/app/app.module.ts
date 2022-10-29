import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import { VideoDisplayComponent } from './video-display/video-display.component';
import { VideoDisplayDetailsComponent } from './video-display/video-display-details/video-display-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VideoDisplayComponent,
    VideoDisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
