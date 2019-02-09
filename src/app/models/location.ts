import {Inject, LOCALE_ID} from '@angular/core';

export class Location {

  /* todo @Inject(LOCALE_ID)*/ public locale: string = 'en';

  get label() {
    console.log(this.locale);

    return this[`${this.locale}Label`];
  }

  id: string;
  enLabel: string;
  frLabel: string;
}
