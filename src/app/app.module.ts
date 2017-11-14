import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslateService, TranslateModule } from 'ng2-translate';
import { LanguageSwitcherComponent } from './LanguageSwitcherComponent';

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot()
  ],
  //providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
