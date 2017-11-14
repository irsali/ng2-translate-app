import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  public ngOnInit(): void {
    this.translateService.addLangs(['en', 'de', 'fr']);
    this.translateService.setDefaultLang('en');
  }

}

