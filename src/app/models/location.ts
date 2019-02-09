import {locale} from '../../environments/locale';


export class Location {

  constructor() {
  }

  get label() {
    return this[`${locale}Label`] ? this[`${locale}Label`] : this.enLabel;
  }

  id: string;
  enLabel: string;
  frLabel: string;
}
