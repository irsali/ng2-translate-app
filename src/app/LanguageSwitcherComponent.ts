import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'language-switcher',
    template: `<ul>
      <li *ngFor="let l of languages" (click)="use(l)"> {{l}} </li>
     </ul>`})
export class LanguageSwitcherComponent implements OnInit {

    constructor(private translateService: TranslateService) { }

    public languages: Array<string> = [];

    public ngOnInit(): void {
        this.languages = this.translateService.getLangs();
    }

    public use(languageKey: string): void {
        this.translateService.use(languageKey);
    }
}